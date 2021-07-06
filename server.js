var express = require('express')
var app = express();
app.use(express.json());
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var db = undefined;

MongoClient.connect('mongodb://localhost:27017/',function(err, database){  
      if(err) 
        console.log(err);
      else
      {
        console.log('Mongo Conn....');
        db = database.db("osInfo");

        db.createCollection("cpu", function(err, res) {
            console.log("cpu created!");
        });

        db.createCollection("disk", function(err, res) {
            console.log("disk created!");
        });

        db.createCollection("ram", function(err, res) {
            console.log("ram created!");
        });

        db.createCollection("process", function(err, res) {
            console.log("process created!");
        });

        db.createCollection("dir", function(err, res) {
            console.log("dir created!");
        });

      }
    });
// //for local server 
// //in local server DBPASSWOAD and DBusername not required
// MongoClient.connect('mongodb://'+DATABASEHOST+':'+DATABASEPORT+'/'+DATABASENAME,function(err, db){  
//       if(err) 
//         console.log(err);
//       else
//       {

//         console.log('Mongo Conn....');

//       }
//     });

function insert(type, data) {
    db.collection(type).insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted of type " + type + 'from userId ' + data.userId);
    });
}


app.post("/disk" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

app.post("/cpuusage" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

app.post("/ramusage" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

app.post("/process" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

app.post("/dir" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

const PORT= 5000; 
var server = app.listen(PORT , function(){
    console.log("Server listening on port " + PORT);
})