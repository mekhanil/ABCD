const express = require('express');
const bodyParser = require('body-parser');
//const ejs = require();

//importing the routes
const index = require('./routes/index');
const about = require('./routes/about');
const contact = require('./routes/contact');
const victimRegister = require('./routes/victimRegister');
const volunteeRegister = require('./routes/volunteeRegister');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.json());                             // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))      // for parsing application/xwww-form-urlencoded

app.use('/', index);
app.use('/index', index);
app.use('/about', about);
app.use('/contact', contact);
app.use('/victimRegister', victimRegister);
app.use('/volunteeRegister', volunteeRegister);
app.all('*', (req, res)=>{
    res.send('Requested page not found!')
});

app.listen(3002);

console.log('Server listening on port 3000');