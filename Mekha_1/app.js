var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

 var app = express();

 app.set('views',path.join(__dirname,'views'));
 app.set('view engine','pug');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(express.static(path.join(__dirname,'public')));
 app.get('/',function(req,res){
    console.log("hello...");
    res.render('layout');
});
 
 app.listen(3001);
 console.log('server is running on 3000');
