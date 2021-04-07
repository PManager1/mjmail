var nodemailer = require('nodemailer');
var fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  port: 587,
  auth: {
      user: "jay@equitydentalpartners.com",
      pass: "jalliaccount9$"
  },
  tls: {
      rejectUnauthorized: false
  }
});


fs.readFile('../Mjml/custom.html', {encoding: 'utf-8'}, function (err, html) {
 if (err) {
   console.log(err);
 } else {
        // setup email data with unicode luke.bergstrom@lw.com  steve.abrams@​hoganlovells.com
        let mailOptions = {
          from: "jay@equitydentalpartners.com", // sender address
          to: 'luke.bergstrom@lw.com', // list of receivers
          subject: 'Luke Bergstrom - Latham Watkins',
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