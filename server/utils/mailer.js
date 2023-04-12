const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:465,
  secure: true,
  // service:'gmail',
  auth:{
    user: 'teslabest87@gmail.com',
    pass: 'ljvfhjeilhwfjccv'
  },
  // tls: {rejectUnauthorized: true},
},{
  from: 'teslabest87 <teslabest87@gmail.com>'
});

// const sendEmail = (message) => {
//   smtpTransport.sendMail(message, function(error, info){
//     if(error) {
//       console.log(error);
//     }else {
//       console.log('Email sent successfully',info);
//     }
//     smtpTransport.close();
//   })
// }

module.exports = smtpTransport;