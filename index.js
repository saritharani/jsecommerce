
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'prathyushag.dl@gmail.com',
    pass: '9885282868'
  }
});

var mailOptions = {
  from: 'prathyushag.dl@gmail.com',
  to: 'prathyushabunny01@gmail.com',
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