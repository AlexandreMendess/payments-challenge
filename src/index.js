const http = require('node:http');
const { default: handler } = require('./handler');

const PORT = process.env.SERVER_PORT || 3000;

const server = http.createServer(handler).listen(
    PORT, () => console.log(`Server is running on port ${PORT}`)
);

module.exports = server;