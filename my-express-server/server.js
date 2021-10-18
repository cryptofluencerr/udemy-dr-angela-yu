//Requires the Express module just as you require other
// modules and and puts it in a variable.
const express = require("express");

// Calls the express function "express()" and puts new Express
// application inside the app variable (to start a new Express
// application). It's something like you are creating an object
// of a class. Where "express()" is just like class and app is it's
// newly created object.
const app = new express();

// app.get("/", (req, resp) => {
//   console.log(request);
//   response.send("<h1>HelloWorld</h1>");
// });

app.get("/contact", (req, res) => {
  res.send("Contact: karan@nextazy.com");
});

app.get("/about", (req, res) => {
  res.send("I own this websites");
});

app.get("/con", (req, res) => {
  res.send("Contact: karan@nextazy.com");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
