const nodemailer = require("nodemailer");
require("dotenv").config();

const smtpTransport = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:465,
  secure: true,
  auth:{
    user: process.env.user,
    pass: process.env.pass
  },
},{
  from: 'teslabest87 <teslabest87@gmail.com>'
});

module.exports = smtpTransport;