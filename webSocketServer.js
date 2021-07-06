//Websocket server to connect to all the incoming clients as the number of sockets
//in a server can be in 10,000's therefore clients simultaneously connected to a single server
//can be also in the same numbers
//This server also does not accept any data except for logging purpose
//Thus websocket server can be scaled up for a large no of users  

const WebSocket = require('ws');
// port no. for websocket connection to client
const PORT = 3000; 

// Time variable pings all the clients at 1 minutes
const TIME = 1 * 60 * 1000;

//Creating a websocket server on port 3000
const wsServer = new WebSocket.Server({port : PORT});

//opens websocket connection for server side
wsServer.on("connection" , function(socket){
    
    console.log("Connections Established");

    //whenver a clients sends a message logs it
    socket.on("message" , function(msg){
        console.log(msg);
    });
    
    //calls ping functions to echo to all clients after n minutes 
    wsServer.timer = setInterval(function(){ping();} , TIME);
});

//function to ping all the clients currently connected to server
function ping() {
    wsServer.clients.forEach(function(client){
        client.ping();
    })
}

console.log((new Date()) + " Server is listening on " + PORT);
