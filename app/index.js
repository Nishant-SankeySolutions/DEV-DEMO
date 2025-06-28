const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('CI/CD Deployment Successful!\n');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
