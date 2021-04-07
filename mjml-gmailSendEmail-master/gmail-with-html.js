var nodemailer = require('nodemailer');
var fs = require('fs');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jpca999@gmail.com',
      pass: 'oshoisthebest9'
    }
});

fs.readFile('render.html', {encoding: 'utf-8'}, function (err, html) {
 if (err) {
   console.log(err);
 } else {
   let mailOptions = {
     from: 'jpca999@gmail.com',
     to: 'jpca999@gmail.com',
     subject: 'Sending Html in node mailer',
     html: html
   };

   transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
     console.log(error);
    } else {
     console.log('Email has been sent: ' + info.response);
    }
  });
 }
});