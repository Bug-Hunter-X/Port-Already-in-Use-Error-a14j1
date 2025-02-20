const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer();

//Added error handling to check if port is already in use

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    //Try a different port
    const newPort = port + 1;
    server.listen(newPort,() => {
      console.log(`Server is listening on port ${newPort}`);
    });
  } else {
    console.error(`Server error: ${err.message}`);
  }
});