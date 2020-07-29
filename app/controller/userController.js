const mongoose = require('mongoose');
const validateInput = require('../libs/paramsValidationLib')
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const checkLib = require('../libs/checkLib');
const shortid = require('shortid');
const passwordLib = require('../libs/passwordLib');
const timeLib = require('../libs/timeLib');
const tokenLib = require('../libs/tokenLib');
const emailLib = require('../libs/emailLib');
const UserModel = mongoose.model('userModel');
const authModel = mongoose.model('authModel');


let signUpFunction = (req, res) => {
    //console.log(req.body)
    //console,log('signup called')
    let apiResponse;
    //validating email
    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!validateInput.Email(req.body.email)) {
                    let apiResponse = response.generate(true, 'email is not upto the requirment', 400, null);
                    logger.error('Email is not valid', 'userController:validateUserInput', 10)
                    reject(apiResponse)
                }
                else if (checkLib.isEmpty(req.body.password)) {
                    let apiResponse = response.generate(true, 'password should be fill', 400, null)
                    logger.error('password is empty', 'userController:validateUserInput', 10)
                    reject(apiResponse)
                }
                else {
                    logger.info('user validated', 'userController:validateUserInput', 10);
                    resolve(req);
                }
            }
            else {
                logger.error('Email field is empty', 'userController:signUpFunction', 10);
                let apiResponse = response.generate(true, 'one or more parameter is missing', 400, null);
                reject(apiResponse);
            }
        });
    }//end of validate user input

    //creating user after input validation
    let createUser = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email: req.body.email })
                .exec((err, retrievedUserDetails) => {
                    if (err) {
                        logger.error(err.message, 'userController: createUser', 10)
                        let apiResponse = response.generate(true, 'Unable To Create User', 500, null)
                        reject(apiResponse)
                    } else if (checkLib.isEmpty(retrievedUserDetails)) {
                        //console.log(req.body)
                        let newUser = new UserModel({
                            userId: shortid.generate(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName || '',
                            //countryName: req.body.country,
                            mobileNumber: req.body.mobileNumber,
                            email: req.body.email.toLowerCase(),
                            password: passwordLib.hashPassword(req.body.password),
                            createdOn: timeLib.now()
                        })
                        newUser.save((err, newUserDetail) => {
                            if (err) {
                                //console.log(err)
                                logger.error(err.message, 'userController: createUser', 10)
                                let apiResponse = response.generate(true, 'Unable to create new User', 500, null)
                                reject(apiResponse)
                            } else {
                                //converting mongoose object to plain javascript object
                                let newUserObj = newUserDetail.toObject();
                                //console.log(newUserObj)

                                let emailOption =
                                {
                                    email: newUserObj.email,
                                    name: newUserObj.firstName + '' +newUserObj.lastName,
                                    subject: 'Welcome To Issue Tracker',
                                    html: `Hi <b><i>Dear${newUserObj.firstName}</i><b><br>,
                                    <b>Welcome to The issue Tracker<b>
                                    <p>You Account is created is on Issue Tracker</p>`
                                }
                                setTimeout(() => 
                                        { emailLib.sendEmail(emailOption);
                                },2000);
                                resolve(newUserObj)
                            }
                        })
                    } else {
                        logger.error('this user is already exists', 'userController: createUser', 4)
                        let apiResponse = response.generate(true, 'Email is already exits with this email-id', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    }// end create user function


    validateUserInput(req, res)
        .then(createUser)
        .then((resolve) => {
            //console.log('inside resolve')
            delete resolve.password;
            delete resolve.__v;
            delete resolve._id;
            apiResponse = response.generate(false, 'user created sucessfully', 200, resolve);
            res.send(apiResponse);
        })
        .catch((error) => {
            //console.log('error')
            res.send(error)
        })
}

//Strat of Login Function
let loginFunction = (req, res) => {
    //using promise for finding user
    let findUser = () => {
        //function for finding a user
        console.log('find user');
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    /* handle the error here if the User is not found */
                    if (err) {
                        logger.error(err.message, 'userController:loginUser:findUser', 10);
                         /* generate the error message and the api response message here */
                        let apiResponse = response.generate(true, 'Unable to fetch user detail', 500, null);
                        reject(apiResponse)
                    }
                    else if (checkLib.isEmpty(userDetails)) {
                         /* generate the response and the console error message here */
                        logger.info('user is not found with this emailId', 'userController:findUser', 7);
                        let apiResponse = response.generate(true, 'Users details not found', 404, null);
                        reject(apiResponse)
                    }
                    else {
                         /* prepare the message and the api response here */
                        logger.info('user found', 'userController:findUser', 10);
                        resolve(userDetails);
                    }
                })
            }
            else {
                //if email is not present then execute this else
                logger.error('emailid is missng', 'userController:findUser', 10);
                let apiResponse = response.generate(true, 'emailid is missing', 400, null);
                reject(apiResponse)
            }
        });// promise ends
    }//findUser ends

    let validatePassword = (retrievedUserDetails) => {
        
        console.log('validate password');
        return new Promise((resolve, reject) => {
            passwordLib.comparePassword(req.body.password, retrievedUserDetails.password, (err, isMatch) => {
                if (err) {
                    logger.error(err.message, 'userController:validatePassword', 10);
                    let apiResponse = response.generate(true, 'login failed', 500, null);
                    reject(apiResponse);
                }
                else if (isMatch) {
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject();
                    delete retrievedUserDetailsObj.password;
                    delete retrievedUserDetailsObj._id;
                    delete retrievedUserDetailsObj.__v;
                    delete retrievedUserDetailsObj.createdOn;
                    resolve(retrievedUserDetailsObj);
                }
                else {
                    logger.info('password is invalid! You are not logged in', 5);
                    let apiResponse = response.generate(true, 'login failed! paasword is wrong', 400, null);
                    reject(apiResponse);
                }
            })
        })
    }// password validation ends here

    let generateToken = (userDetails) =>{
        console.log('generate token');
        return new Promise((resolve, reject) => {
            tokenLib.generateToken(userDetails, (error, tokenDetails) => {
                if (error) {
                    logger.error(error);
                    let apiResponse = response.generate(true, 'Unable to generate token', 500, null);
                    reject(apiResponse);
                }
                else {
                    tokenDetails.userDetails = userDetails;
                    resolve(tokenDetails);
                }
            })
        })
    }// generating token ends here

    let saveToken = (tokenDetails) => {
        //console.log('save token');

        return new Promise((resolve, reject) => {
            authModel.findOne({ 'userId': tokenDetails.userDetails.userId }, (err, retrievedTokenDetails) => {
                if (err) {
                    logger.error(err.message, 'userController:saveToken', 10);
                    let apiResponse = response.generate(true, err.message, 500, null);
                    reject(apiResponse);
                }
                else if (checkLib.isEmpty(retrievedTokenDetails)) {
                    let newauthModel = new authModel(
                        {
                            userId: tokenDetails.userDetails.userId,
                            authToken: tokenDetails.token,
                            tokenSecret: tokenDetails.tokenSecret,
                            tokenGenerationTime: timeLib.now()
                        }
                    );

                    newauthModel.save((err, newTokenDetails) => {
                        if (err) {
                            logger.error('auth token is unable to save during login', 'userController:savetoken', 10);
                            let apiResponse = response.generate(true, err.message, 500, null);
                            reject(apiResponse)
                        }
                        else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }

                            resolve(responseBody)
                        }
                    })
                }
                else {
                    
                    retrievedTokenDetails.authToken = tokenDetails.token;
                    retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret;
                    retrievedTokenDetails.tokenGenerationTime = timeLib.now(); //if user is already is present for this code

                    retrievedTokenDetails.save((err, newTokenDetails) => {
                        if (err) {
                            logger.error('gettign error while updating auth token', 'userController:savetoken', 10);
                            let apiResponse = response.generate(true, 'getting error while updating auth token', 500, null);
                            reject(apiResponse)
                        }
                        else {
                            console.log('new token details after log in'+newTokenDetails.authToken)
                            console.log('newtokendetails : ' + newTokenDetails)
                            let response = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(response)
                        }
                    })
                }
            })
        });//promise for saving token ends
    }// savetoken function ends

    findUser(req, res)
        .then(validatePassword)
        .then(generateToken)
        .then(saveToken)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'login successfull', 200, resolve);
            logger.info(apiResponse.message, 'signIn');
            res.status(200);
            res.send(apiResponse);
        })
        .catch((error) => {
            res.send(apiResponse);
        })
}

let logOutFunction = (req, res) => {
    
    mongoose.set('useFindAndModify', false);

    authModel.findOneAndRemove({ userId: req.user.userId }, (err, result) => {
        if (err) {
            //console.log(err)
            logger.error(err.message, 'user Controller: logout', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            res.send(apiResponse)
        } else if (checkLib.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Already Logged Out or Invalid UserId', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Logged Out Successfully', 200, null);
            logger.info('logged out')
            res.send(apiResponse)
        }
    })
}

/* Get all user Details */
let getAllUsers = (req, res) => {
    UserModel.find()
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                //console.log(err)
                logger.error('failed to find all user', 'User Controller: getAllUser', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.info('No User Found', 'User Controller: getAllUser')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All User Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users

//function to resolve forgot password
let forgotPassword = (req, res) => {

    //validating email
    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.params.email) {
                if (!validateInput.Email(req.params.email)) {
                    apiResponse = response.generate(true, 'email does not met the requirement', 400, null);
                    logger.error('not valid email', 'userController:recoverForgotPassword:validateUserInput', 10)
                    reject(apiResponse)
                }
                else {
                    logger.info('user validated', 'userController:validateUserInput', 10);
                    resolve(req);
                }
            }
            else {
                logger.error('email field missing', 'userController:recoverForgotPassword', 10);
                apiResponse = response.generate(true, 'Email is missing', 400, null);
                reject(apiResponse);
            }
        });
    }//end of validate user input

    let findUser = () => {
        return new Promise((resolve, reject) => {

            UserModel.findOne({ 'email': req.params.email })
                .select('-__v -_id')
                .lean()
                .exec((err, result) => {
                    if (err) {
                        //console.log(err)
                        logger.error('failed to find user detail', 'User Controller: recoverPassword', 10)
                        apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                    } else if (checkLib.isEmpty(result)) {
                        logger.info('No User Found with given email', 'User Controller:recoverPassword')
                        apiResponse = response.generate(true, 'No User Found with given email', 404, null)
                        reject(apiResponse)
                    } else {
                        resolve(result)

                    }
                })
        })
    }

    let generateAndSaveNewPassword = (userDetail) => {
        let newPassword = passwordLib.generateNewPassword();
        console.log('new password', newPassword); //generating new password
        userDetail.password = passwordLib.hashPassword(newPassword)
        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'email': req.params.email }, userDetail).exec((err, result) => {
                if (err) {
                    //console.log(err)
                    logger.error('Unabke to reset the password', 'User Controller:generateAndSavePassword', 10)
                    apiResponse = response.generate(true, 'Unable To reset the Password', 500, null)
                    reject(apiResponse)
                } else if (checkLib.isEmpty(result)) {
                    logger.info('Email not found', 'User Controller: generateAndSaveNewPassword')
                    apiResponse = response.generate(true, 'Emal Id is not registered', 404, null)
                    reject(apiResponse)
                } else {
                    //Creating object for sending email 
                    let sendEmailObj = {
                        email: req.params.email,
                        name: newUserObj.firstName+ '' + newUserObj.lastName,
                        subject: 'Reset Your Issue Tracker Password',
                        html: `<h5> <br><i>  Dear ${userDetail.firstName}</h5> <br><i>
                                <pre>
                                Looks like you forgot your IssueTracker Password! We sure will help you. your new password is providing by us
                                use it. So here is your new password ${newPassword}.
                                Please visit our website again =>>IssueTracker<<=.
                                </pre>`
                    }

                    setTimeout(() => {
                        emailLib.sendEmailToUser(sendEmailObj);
                    }, 2000);
                    let apiResponse = response.generate(false, 'reset password successfull', 200, result)
                    resolve(apiResponse)
                }
            });
        })
    }//end of generating and saving new password

    validateUserInput(req, res)
        .then(findUser)
        .then(generateAndSaveNewPassword)
        .then((resolve) => {
            res.send(resolve)
        })
        .catch((error) => {
            res.send(error)
        })
    
}//forgot password function ends

module.exports =
    {
        signUpFunction: signUpFunction,
        loginFunction:loginFunction,
        logOutFunction:logOutFunction,
        getAllUsers: getAllUsers,
        forgotPassword: forgotPassword
    }