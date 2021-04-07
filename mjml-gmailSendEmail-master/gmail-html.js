
const fs = require('fs');

const { promisify } = require('util');

const readFile = promisify(fs.readFile);


 const nodemailer = require('nodemailer');
    const Email = require('email-templates');

    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 465,
      secure: false,
      auth: {
        user: 'jpca999@gmail.com',
        pass: 'oshoisthebest9'
      }
    });

    const email = new Email({
      transport: transporter,
      send: true,
      preview: false,
    });

    email.send({
      template: './render.html',
      message: {
        from: 'jpca999@gmail.com',
        to: 'jpca999@gmail.com',
      },
      locals: {
        fname: 'John',
        lname: 'Snow',
      }
    }).then(() => console.log('email has been sent!'));












