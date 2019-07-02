const { createServer } = require('net');
const { parseRequest } = require('../utils/parseRequest');
// const { home } = require('../utils/page-utils');
const { makeResponse } = require('../utils/makeResponse');

const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseRequest(data);
    console.log(parsedData);
    if(parsedData.method === 'GET' && parsedData.path === '/') {
      const res = makeResponse('200 OK', 'hello', 'text/plain');
      console.log(res);
      sock.write(res);
      sock.end();
    } else {
      const res = makeResponse('404', 'Not Found, MEOW >:(', 'text/plain');
      sock.write(res);
      sock.end();
    }
  });
});

module.exports = { app };
