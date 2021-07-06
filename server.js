var express = require('express')
var app = express();
app.use(express.json());

// var mongo = require('mongodb');
// var MongoClient = mongo.MongoClient;    
// MongoClient.connect('mongodb://'+DATABASEUSERNAME+':'+DATABASEPASSWORD+'@'+DATABASEHOST+':'+DATABASEPORT+'/'+DATABASENAME,function(err, db){  
//       if(err) 
//         console.log(err);
//       else
//       {
//         console.log('Mongo Conn....');

//       }
//     });
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



app.post("/disk" , function(req ,res ){
    console.log(req.body);
})

app.post("/cpuusage" , function(req ,res ){

    console.log(req.body);
})

app.post("/ramusage" , function(req ,res ){

    console.log(req.body);
})

app.post("/process" , function(req ,res ){

    console.log(req.body);
})

app.post("/dir" , function(req ,res ){

    console.log(req.body);
})

const PORT= 5000; 
var server = app.listen(PORT , function(){
    console.log("Server listening on port " + PORT);
})