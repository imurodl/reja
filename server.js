console.log("Web serverni boshlang");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("views engine", "ejs"); // BSSR

// 4: Routing code
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background: #3bbf5e">HELLO WORLD<h1>`);
});
app.get("/gift", function (req, res) {
  res.end("Siz sovg'alar bolimidasiz");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
});
