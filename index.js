var nodemailer = require('nodemailer');
 
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'daniyashakeel22@gmail.com',
    pass: 'bcuplxpuouoyftwb'
  },
  port : 465 ,
  host : 'smtp.gmail.com'
});
 
var mailOptions = {
  from: 'daniyashakeel22@gmail.com',
  to: 'dudeperfectonly22@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
