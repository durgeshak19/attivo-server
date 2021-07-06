

sudo apt install nodejs

kill $(lsof -t -i:3000)
kill $(lsof -t -i:5000)

npm install 

echo "Server Running"

node webSocketServer.js &
node server.js &

