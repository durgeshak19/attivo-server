

kill $(lsof -t -i:3000)
kill $(lsof -t -i:5000)

docker-compose -f "docker-compose-mongo-db.yml" up -d --build

npm install 

echo "Server Running"

node webSocketServer.js &
node server.js &

