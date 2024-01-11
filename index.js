// Include the http module(http object), which is built into Node
// This module allows node to transfer data over the Hyper Text Transfer Protocol (HTTP) used by the internet.
const http = require("http");

// Define the location and port of the server
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1 style='color: red'>Hello World!</h1>");
  res.write("<p>I wonder what else we can send...</p>");
  res.end("Hello World!\n");

  let url = "/";
  switch (req.url) {
    case "/about":
      url = "/about.html";
    case "/contact":
      url = "/contact.html";
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
