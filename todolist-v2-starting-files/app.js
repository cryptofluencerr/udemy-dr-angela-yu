const express = require("express");
//require mongoose
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//selecting network for mongoDB and DB name
mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
});
//Schema for mongooseDB
const itemSchema = new mongoose.Schema({
  name: String,
});
//mongoose model
const Item = mongoose.model("Item", itemSchema);
const item1 = new Item({ name: "Welcome to your todoList!" });
const item2 = new Item({ name: "Hit the + button to add a new item." });
const item3 = new Item({ name: "<-- Hit this to delete an item." });

const defaultItems = [item1, item2, item3];


const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function (req, res) {
  res.render("list", { newListItems: items });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
