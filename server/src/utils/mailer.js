const nodemailer = require("nodemailer");
require("dotenv").config();

const smtpTransport = nodemailer.createTransport({
  host:'smtp.ukr.net',
  port:2525,
  secure: true,
  auth:{
    user: 'medimplant2023@ukr.net',
    pass: ''
  },
},{
  from: 'medimplant <medimplant2023@ukr.net>'
});

module.exports = smtpTransport;
