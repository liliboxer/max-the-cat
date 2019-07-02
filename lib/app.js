const { createServer } = require('net');

const app = createServer(sock => {
  console.log('things happening...');
  sock.on('data', data => {
    console.log(data.toString());
    sock.write(data);
  });
});

module.exports = { app };
