
//Asynchronous File Reading

const fs = require('fs')
console.log('start reading the file')

fs.readFile("file.txt","utf-8",function(err,content){
    if(err){
        console.log('error occured')
        return console.log(err)

    }
    console.log(content)
})

console.log('end of file')

/*
O/P
start reading the file
end of file
Hi Whats'up
*/