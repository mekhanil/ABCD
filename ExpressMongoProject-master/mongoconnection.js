const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/animals';

MongoClient.connect(url, (err, db)=>{
    console.log('connected to mongo'); 

    //Querying data in MongoDB
    var cursor = db.collection('mammals').find();
    cursor.each(function(err, doc) {
        console.log(doc);
    });

    //Inserting documents in a collection
    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    });

    //Updating documents in a collection 
    db.collection('Employee').updateOne({
        "EmployeeName": "NewEmployee"
    }, {
        $set: {
            "EmployeeName": "Mohan"
        }
    });

    //Deleting documents in a collection 
    db.collection('Employee').deleteOne(
        {
            "EmployeeName": "Mohan"
        }
    );

    db.close();  //Delete this line later!
});

function update(){

}