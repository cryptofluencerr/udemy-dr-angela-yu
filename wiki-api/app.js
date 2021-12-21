const express = require("express");
const https = require("https");

app = express();

app.use(express.urlencoded({ extended: true }));

// To render static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {});

app.listen(3000, () => {
  console.log("Port is running on 3000");
});
