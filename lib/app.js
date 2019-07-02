const { createServer } = require('net');
const { parseRequest } = require('../utils/parseRequest');


const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseRequest(data);
    console.log(parsedData);
    sock.write(data);
  });
});

module.exports = { app };
