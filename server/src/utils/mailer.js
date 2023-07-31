const nodemailer = require("nodemailer");
require("dotenv").config();

const smtpTransport = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:465,
  secure: true,
  auth:{
    user: 'medimplant2023@gmail.com',
    pass: 'ryyhummtaervrcnb'
  },
},{
  from: 'medimplant <medimplant2023@gmail.com>'
});

module.exports = smtpTransport;