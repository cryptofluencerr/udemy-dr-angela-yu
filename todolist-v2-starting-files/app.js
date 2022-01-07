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

const listSchema = new mongoose.Schema({ name: String, items: [itemSchema] });
const List = mongoose.model("List", listSchema);

// const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function (req, res) {
  // Mongoose method to add items
  Item.find((err, docs) => {
    // console.log(docs);
    if (docs.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated successfully");
        }
      });
    } else {
      res.render("list", {
        newListItems: docs,
        listTitle: "Todo List",
      });
    }
  });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName,
  });
  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      console.log(foundList, listName);
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", (req, res) => {
  const checkedItemId = req.body.checkbox;
  Item.findByIdAndRemove(checkedItemId, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted successfully");
    }
    res.redirect("/");
  });
});

app.get("/:customListName", (req, res) => {
  // console.log(req.params.customListName);
  const customListName = req.params.customListName;
  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        const list = new List({ name: customListName, items: defaultItems });
        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("list", {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
      }
    }
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(4000, function () {
  console.log("Server started on port 3000");
});
