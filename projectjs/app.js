
//Synchronous File reading

const fs = require("fs");
console.log("Start reading the file")
let content
try{
    content=fs.readFileSync('file.txt','utf-8')
}
catch(ex){
    console.log(ex)
}
console.log(content)
console.log("End of file")

/*
O/P
Start reading the file
Hi Whats'up
End of file
*/