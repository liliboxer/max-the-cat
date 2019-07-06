const fs = require('fs');
const { createServer } = require('net');
const { parseRequest } = require('../utils/parseRequest');
const { makeResponse } = require('../utils/makeResponse');

const app = createServer(sock => {
  sock.on('data', data => {
    const parsedData = parseRequest(data);
    // route for home page
    if(parsedData.method === 'GET' && parsedData.path === '/') {
      fs.readFile('./index.html', { encoding: 'utf8' }, (err, content) => {
        if(err && err.code === 'ENOENT') {
          sock.write('Not Found');
        } else {
          const res = makeResponse('200 OK', content, 'text/html');
          sock.write(res);
        }
        sock.end();
      });
    // route for really awesome link 
    } else if(parsedData.method === 'GET' && parsedData.path === '/really') {
      fs.readFile('./really.html', { encoding: 'utf8' }, (err, content) => {
        if(err && err.code === 'ENOENT') {
          sock.write('Not Found');
        } else {
          const res = makeResponse('200 OK', content, 'text/html');
          sock.write(res);
        }
        sock.end();
      });
    // route for super awesome link
    } else if(parsedData.method === 'GET' && parsedData.path === '/super') {
      fs.readFile('./super.html', { encoding: 'utf8' }, (err, content) => {
        if(err && err.code === 'ENOENT') {
          sock.write('Not Found');
        } else {
          const res = makeResponse('200 OK', content, 'text/html');
          sock.write(res);
        }
        sock.end();
      });
    // route for number input filled out
    } else if(parsedData.method === 'GET' && parsedData.path === '/number') {
      fs.readFile('./number.html', { encoding: 'utf8' }, (err, content) => {
        if(err && err.code === 'ENOENT') {
          sock.write('Not Found');
        } else {
          const res = makeResponse('200 OK', content, 'text/html');
          sock.write(res);
        }
        sock.end();
      });
    } else {
      const res = makeResponse('404', 'Not Found, MEOW >:(', 'text/plain');
      sock.write(res);
      sock.end();
    }
  });
});

module.exports = { app };
