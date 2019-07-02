const { createServer } = require('net');
const { parseRequest } = require('../utils/parseRequest');
const { makeResponse } = require('../utils/makeResponse');
const { home } = require('../utils/page-utils');

const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseRequest(data);
    if(parsedData.method === 'GET' && parsedData.path === '/') {
      const res = makeResponse('200 OK', home, 'text/html');
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
