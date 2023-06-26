const fs = require('fs');
const ejs = require('ejs');
const https = require('https');
const express = require('express');
const helmet = require('helmet');

const app = express();
const PORT = 3000;

//middleware
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(helmet());


//routes
app.get('/', (req, res) => {
    res.render('home');
});

//server start
console.log (`Running server on port: ${PORT}`);
console.log ('Worker has been started');
https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {

});
