const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db)=>{
    console.log('connected to mongo'); 
    var dbo = db.db("animals");

    //Querying data in MongoDB
    var cursor = dbo.collection('mammals').find();
    cursor.forEach(function(err, doc) {
        console.log(doc);
    });

    db.close();  //Delete this line later!
});

function update(){

}