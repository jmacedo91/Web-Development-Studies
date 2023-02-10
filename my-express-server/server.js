//jshint esversion:6

// npm install -g nodemon

// Importing express.js
const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res) {
res.send("<h1>Hello Jonathan!</h1>");
});

app.get("/contact", function(req, res) {
res.send("Contact me at: jonathan.silvamacedo@gmail.com");
});

app.get("/about", function(req, res) {
res.send("Hello, I'm Jonathan, if you want to know more about me please contact me at: jonathan.silvamacedo@gmail.com");
});

app.get("/hobbies", function(req, res) {
res.send("<ul><li>Coffee ☕</li><li>Code 👨‍💻</li><li>Games 🎮</li></ul>");
});

app.listen(port, function () {
console.log("Server is working...");
});
