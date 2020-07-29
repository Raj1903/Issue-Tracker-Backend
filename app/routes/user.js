const appConfig = require('../../appConfig');
const userController = require('../controller/userController');
const authMiddleware = require('../middlewares/auth');

let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/user`;


    app.post(`${baseUrl}/signup`, userController.signUpFunction); 
    /**
     * @apiGroup user
     * @apiVersion  1.0.0
     * @api {post} /api/v1/user/signup api for Registering User.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {number} mobileNumber Mobile Number of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
      {
    "error": false,
    "message": "user created",
    "status": 200,
    "data": {
        "userId": "_tNpgDUZD",
        "firstName": "OsamaBin",
        "lastName": "Laaden",
        "mobileNumber": 9123456789,
        "createdOn": "2020-07-24T11:05:34.000Z",
        "email": "osamabinlaaden@gmail.com"
    }
}
          
    */


    app.post(`${baseUrl}/login`, userController.loginFunction);
    /**
     * @apiGroup user
     * @apiVersion  1.0.0
     * @api {post} /api/v1/user/login api for login.
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
           {
    "error": false,
    "message": "login successfull",
    "status": 200,
    "data": {
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ik1xektwb3N6ciIsImlhdCI6MTU5NTU5NDI5NjQ5NiwiZXhwIjoxNTk1NjgwNjk2NDk2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJpc3N1ZS10cmFja2VyIiwiZGF0YSI6eyJ1c2VySWQiOiJfdE5wZ0RVWkQiLCJmaXJzdE5hbWUiOiJPc2FtYUJpbiIsImxhc3ROYW1lIjoiTGFhZGVuIiwibW9iaWxlTnVtYmVyIjo5MTIzNDU2Nzg5LCJlbWFpbCI6Im9zYW1hYmlubGFhZGVuQGdtYWlsLmNvbSJ9fQ.Vkf_RsNHSj7u_mWO--jmcYoa0BkGa_kWqKKoT1n6pVQ",
        "userDetails": {
            "userId": "_tNpgDUZD",
            "firstName": "OsamaBin",
            "lastName": "Laaden",
            "mobileNumber": 9123456789,
            "email": "osamabinlaaden@gmail.com"
        }
    }
}
    */
    app.post(`${baseUrl}/logout`, authMiddleware.isAuthorized, userController.logOutFunction);
    /**
     * @apiGroup user
     * @apiVersion  1.0.0
     * @api {post} /api/v1/user/logout api to logout .
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
           {
               "error": false,
               "message": "Logged Out Successfully",
               "status": 200,
               "data": null
}
    */
    app.get(`${baseUrl}/view/all`, authMiddleware.isAuthorized, userController.getAllUsers);
    /**
     * @apiGroup user
     * @apiVersion  1.0.0
     * @api {get} /api/v1/user/view/all api for Getting all users.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "All User Details Found",
    "status": 200,
    "data": [
        {
            "userId": "_tNpgDUZD",
            "firstName": "OsamaBin",
            "lastName": "Laaden",
            "mobileNumber": 9123456789,
            "createdOn": "2020-07-24T11:05:34.000Z",
            "email": "osamabinlaaden@gmail.com"
        },
        {
            "userId": "5YaZpjaJ5",
            "firstName": "Akash",
            "lastName": "kumar",
            "mobileNumber": 9006382312,
            "createdOn": "2020-07-25T18:08:27.000Z",
            "email": "akashkumar@gmail.com"
        }
    ]
}
    */
    app.post(`${baseUrl}/:email/forgotpassword`, userController.forgotPassword);
    /**
     * @apiGroup user
     * @apiVersion  1.0.0
     * @api {post} /api/v1/user/:email/forgotpassword api for password reset.
     * @apiParam {string} email email of the user. (query params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "reset password successfull",
        "status": 200,
        "data": 
        }
        }
    */
}

module.exports =
    {
        setRouter: setRouter
    }