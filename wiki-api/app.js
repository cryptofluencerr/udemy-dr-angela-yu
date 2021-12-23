const express = require("express");
const https = require("https");
const ejs = require("ejs");
const mongoose = require("mongoose");

app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// To render static files
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
});

const articleSchema = {
  title: String,
  content: String,
};
const Article = mongoose.model("Article", articleSchema);

app.get("/articles", function (req, res) {
  Article.find(function (err, foundArticles) {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
});

app.post("/articles", (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
  });
  newArticle.save(function (err) {
    if (!err) {
      res.send("Successfully added a new article");
    } else {
      console.log(err);
    }
  });
});

app.delete("/articles", (req, res) => {
  Article.deleteMany(function (err) {
    if (!err) {
      res.send("Successfully selected the articles.");
    } else {
      res.send(err);
    }
  });
});

app.listen(3000, () => {
  console.log("Port is running on 3000");
});
