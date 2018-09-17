const http = require('http')
const os = require('os')
const path = require('path')
const fs = require('fs')
const url = require('url')

const mimeTypes ={
    'html' : 'text/html',
    'jpg' : 'image/jpg',
    'jpeg' : 'image/jpeg',
    'png' : 'image/png',
    'js' : 'text/javascript',
    'css' : 'text/css' 
};

http.createServer((req,res)=>{
    var uri = url.parse(req.url).pathname //storing url of your webpage in uri 
    var fileName = path.join(process.cwd(),unescape(uri))//setting filename as current working directory+url
    console.log('Loading '+uri)
    var stats;

    try{
        stats = fs.lstatSync(fileName)//obtains metadata of your file and store in stats
        //console.log(stats)
        console.log("HERE")
    }

    catch(e){
        res.writeHead(404,{'Content-type' : 'text/plain'})//info regarding the response http file aka header and is not printed
        res.write('404 NOT FOUND\n')//response to be printed if error
        res.end()//end of result
        return;
    }

    if(stats.isFile()){//if file is asked for Eg:localhost:3089/index.html
        var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]]//splits the filename based on . and reverses it and take up the value at 0th index
        console.log(path.extname(fileName).split(".").reverse()[0])
        res.writeHead(200,{'Content-type' : mimeType})//create header whose content can be of any file in mimeTypes
        var filestream = fs.createReadStream(fileName)//create filestream to read
        filestream.pipe(res)//pipes the data to the res or renders the page
       
    }

    else if(stats.isDirectory()){//if a directory is asked for Eg:localhost:3089 ie,default will go to index.html
        res.writeHead(302,{
            'Location' : 'index.html'})
            console.log('Redirect')
           res.end()
        }
     


})
.listen(3088)