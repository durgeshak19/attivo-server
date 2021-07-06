var WebSocket = require('ws');

const PORT = 3000;
const wsServer = new WebSocket.Server({port : PORT});


wsServer.on("connection" , function(socket){
    console.log("Connections Established");
    socket.on("message" , function(msg){
        console.log(msg);
    }); 
    wsServer.timer = setInterval(function(){ping();} , 5000);
});

function ping() {
    wsServer.clients.forEach(function(client){
        client.ping();
    })
}

console.log((new Date()) + " Server is listening on " + PORT);
