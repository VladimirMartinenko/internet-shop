const nodemailer = require("nodemailer");
require("dotenv").config();

const smtpTransport = nodemailer.createTransport({
  host:'smtp.ukr.net',
  port:465,
  secure: true,
  auth:{
    user: 'medimplant2023@ukr.net',
    pass: ''
  },
},{
  from: 'Medimplant <medimplant2023@ukr.net>'
});

module.exports = smtpTransport;
