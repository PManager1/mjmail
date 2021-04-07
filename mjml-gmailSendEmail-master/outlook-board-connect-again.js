var nodemailer = require('nodemailer');
var fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  port: 587,
  auth: {
      user: "jay@equitydentalpartners.com",
      pass: "Jalliaccount9"
  },
  tls: {
      rejectUnauthorized: false
  }
});


fs.readFile('../Mjml/boardmember.html', {encoding: 'utf-8'}, function (err, html) {
 if (err) {
   console.log(err);
 } else {
        // setup email data with unicode symbols
        let mailOptions = {
          from: "jay@equitydentalpartners.com", // sender address
          to: 'darren.campili@gmail.com', // list of receivers
          subject: 'Non Executive Member Board of Directors - Darren Campili',
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