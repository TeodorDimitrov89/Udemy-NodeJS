const http = require('http');
const routes = require('./routes');

const serverPort = 3000;

const server = http.createServer(routes);

server.listen(serverPort);

console.log(`Server is running on port ${serverPort}`);