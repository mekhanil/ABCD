console.log(__filename);
console.log(__dirname);


function log(message){
    //Send an HTTP request
    console.log(message);
}

module.exports=log;


//Path Module

const path=require('path');

var pathObj=path.parse(__filename);

console.log(pathObj.name)

/*
{ root: '/',
  dir: '/home/ubuntu/Desktop/MekhaAnil',
  base: 'logger.js',
  ext: '.js',
  name: 'logger' }*/

//OS Module


