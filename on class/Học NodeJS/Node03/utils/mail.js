"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "apeironisme@gmail.com",
    pass: "xrdw bred imsj hntg",
  },
});

const sendMail = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: '"Vũ Đức Tài" <apeironisme@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    html: message, // html body
  });
  return info;
};
module.exports = sendMail;
