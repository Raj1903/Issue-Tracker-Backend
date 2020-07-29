const nodemailer = require('nodemailer');


let sendEmail = (sendEmailOptions) => {

    let account = {
        user: 'pulkitraj1903@gmail.com', //emailid
        pass: '********'  //password
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: account.user, 
            pass: account.pass 
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Welcome to Issue Tracker" pulkitraj1903@gmail.com', 
        to: sendEmailOptions.email, 
        subject: sendEmailOptions.subject,
        text: `Hii ${sendEmailOptions.name},
               Welcome to Issue Tracker, Now Make Your Queries here and Check the solution step by step. 
        `, 
        html: sendEmailOptions.html // html body
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        else{
            console.log('Message successfully sent.', info);
        }
       
    });

}

module.exports = {
    sendEmail: sendEmail
  }
