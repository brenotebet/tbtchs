const ejs = require('ejs');
const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const helmet = require('helmet');
const fs = require('fs');
const validator = require('validator');
require('dotenv').config();


const app = express();
const PORT = 8000;

//middleware
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));


//routes
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/submit', (req, res) => {
    const name = req.body.fullName;
    const email = req.body.email;
    const content = req.body.content;

    const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth:{
            user: 'brenotebet@live.com',
            pass: process.env.EMAIL_PASSWORD,
        }
    })

    if (!validator.isEmail(email)) {
        res.send('Invalid email address.');
        return;
    }

    const mailOptions = {
        from: 'brenotebet@live.com',
        to: 'tebetechs@gmail.com',
        subject: 'Quote from TBHCHS',
        text: `Full Name: ${name}\nEmail: ${email}\nText: ${content}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Thank you for submitting the form!');
        }
      });

});

//server start
console.log (`Running server on port: ${PORT}`);
console.log ('Worker has been started');
app.listen(PORT);
