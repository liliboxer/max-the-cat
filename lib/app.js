const { createServer } = require('http');

const app = createServer(sock => {
  console.log('things happening...');
  sock.on('data', data => {
    console.log(data.toString());
    sock.write('hi');
  });
});

module.exports = { app };
