//This server accepts posts requests from the clients pinged by websocket server
//and saves in MongoDB database  

var express = require('express')
var app = express();
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

app.use(express.json());

var db = undefined;
const PORT= 5000; 



//Creates and start a mongoDB server in the local host.
//On succesful connections creates different collections to store 
//the incoming Clients data based on their type(ex  RAM , CPU usage etc.)   
//on subsequent connection appends the data rather than overwriting
MongoClient.connect('mongodb://localhost:27017/',function(err, database){  
      if(err) 
        console.log(err);
      else
      {

        console.log('Mongo Server Connected...');
        //create database osInfo
        db = database.db("osInfo");
        
        console.log('Creating Collections... ');
        //create collection in database to store CPU usage info
        db.createCollection("cpu", function(err, res) {
            console.log("CPU created!");
        });


        //create collection in database to store Disk usage info
        db.createCollection("disk", function(err, res) {
            console.log("Disk created!");
        });


        //create collection in database to store CPU usage info
        db.createCollection("ram", function(err, res) {
            console.log("RAM created!");
        });


        //create collection in database to store No. of process running info
        db.createCollection("process", function(err, res) {
            console.log("Process created!");
        });


        //create collection in database to store Directory info
        db.createCollection("dir", function(err, res) {
            console.log("Directory created!");
        });

      }
    });

//function to insert into data into database and in their respective 
//collection based on the type recieved from client
function insert(type, data) {
    db.collection(type).insertOne(data, function(err, res) {
        if (err) throw err;
        //if succesfully inserted log the details of data and client
        console.log("Document inserted of type " + type + ' from userId ' + data.userId);
    });
}

//using express to write into database based on data type and respective URLs

//inserting data into disk collection
app.post("/disk" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

//inserting data into Cpu collection
app.post("/cpuusage" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

//inserting data into Ram collection
app.post("/ramusage" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

//inserting data into process collection
app.post("/process" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

//inserting data into Directory collection
app.post("/dir" , function(req ,res ){
    insert(req.body.type, {userId : req.body.id, data : req.body.info});
    console.log(req.body);
})

//create a server and listen on port 5000
var server = app.listen(PORT , function(){
    console.log("Server listening on port " + PORT);
})