var nodemailer = require('nodemailer');
 
// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport('smtps://jpca999@gmail.com:oshoisthebest9@smtp.gmail.com');
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address 
    to: 'jpca999@gmail.com, libertytrustgroupllc@gmail.com', // list of receivers 
    subject: 'Hello ✔', // Subject line 
    text: 'Hello world 🐴', // plaintext body 
    html: `<h1>Contact details</h1>
    <h2> name:'abc' </h2><br>
    <h2> email:'abc' </h2><br>
    <h2> phonenumber:'abc' </h2><br>
    <h2> message:'abc' </h2><br>`
    
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});