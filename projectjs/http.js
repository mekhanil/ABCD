//HTTP Module

const http = require('http')

var server=http.createServer((req,res)=>{
    //((req,res)=> is equivalent to function(req,res))
    if(req.url=='/'){

       res.write('Hello')
       res.end();
    }

    if(req.url == "/api/courses"){
        res.write('Yo')
        res.end();
    }

})

server.listen(7989) // go to localhost:3000 and that is a request

console.log('Listening to 7989');


