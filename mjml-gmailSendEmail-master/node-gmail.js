var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jpca999@gmail.com',
    pass: 'oshoisthebest9'
  }
});

var mailOptions = {
  from: 'jpca999@gmail.com',
  to: 'jpca999@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: "<p>HTML version of the message</p>"
};



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});