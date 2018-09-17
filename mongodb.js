var MongoClient = require('mongodb').MongoClient

var url='mongodb://127.0.0.1:27017/mekha'

MongoClient.connect(url,{ useNewUrlParser: true },function(err,db){
    if(err)throw err;
   var dbo = db.db("mekha");

   dbo.collection("customers").find({},{ _id: 0, name: 1, address: 1 }).toArray( function(err, res) {
     if (err) throw err;
     console.log(res);
     db.close();
    }
)
})
