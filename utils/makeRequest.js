// server takes client request and returns correct response 

const makeRequest = (status, data, contentType) => {
  const date = new Date();
  return `HTTP/1.1 ${status}
  Date: ${date}
  Server: Apache
  Accept-Ranges: bytes
  Content-Length: ${Buffer.from(data).length}
  Content-Type: ${contentType}
  
  ${data}`;
};

module.exports = { makeRequest };
