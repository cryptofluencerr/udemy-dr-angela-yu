const express = require("express");
const date = require(__dirname + "/date.js");
console.log(date);
const app = express(date);

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// For homepage todo list
app.get("/", (req, res) => {
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.post("/", (req, res) => {
  console.log(req.body);
  if (req.body.list === "Work Space") {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
  } else {
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
  }
  // console.log(req.body);
});

// For work space todo list
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work Space", newListItems: workItems });
});

const workItems = [];

app.post("/work", (req, res) => {
  var item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

// About page
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
