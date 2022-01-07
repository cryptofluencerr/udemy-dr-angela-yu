const express = require("express");
const https = require("https");
const ejs = require("ejs");
const mongoose = require("mongoose");
const req = require("express/lib/request");

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

//////////////////////////////////////////Requests Targeting all Articles//////////////
app
  .route("/articles")
  .get((req, res) => {
    Article.find(function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
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
  })
  .delete((req, res) => {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully deleted the articles.");
      } else {
        res.send(err);
      }
    });
  });

///////////////////////////Requests Targeting A Specific Article//////////////

app
  .route("/articles/:articleTitle")
  .get((req, res) => {
    Article.findOne(
      { title: req.params.articleTitle },
      function (err, foundArticle) {
        if (foundArticle) {
          res.send(foundArticle.content);
        } else {
          res.send("No articles matching that title was found");
        }
      }
    );
  })
  .put((req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { upsert: true },
      (err) => {
        if (!err) {
          res.send("Successfully updated article.");
        }
      }
    );
  })
  .patch((req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { $set: req.body },
      (err) => {
        if (!err) {
          res.send("Successfully updated the article.");
        }
      }
    );
  })
  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
      if (!err) {
        res.send("Successfully deleted the article.");
      }
    });
  });

app.listen(3000, () => {
  console.log("Port is running on 3000");
});
