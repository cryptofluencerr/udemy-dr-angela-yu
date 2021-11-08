const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const homeStartingContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur quibusdam fuga minus iure incidunt, ipsum hic, vel obcaecati sequi dolorum necessitatibus, est voluptatum repellat alias quis velit itaque? Repellat.
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur quibusdam fuga minus iure incidunt, ipsum hic, vel obcaecati sequi dolorum necessitatibus, est voluptatum repellat alias quis velit itaque? Repellat.`;
const aboutContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur quibusdam fuga minus iure incidunt, ipsum hic, vel obcaecati sequi dolorum necessitatibus, est voluptatum repellat alias quis velit itaque? Repellat.
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur quibusdam fuga minus iure incidunt, ipsum hic, vel obcaecati sequi dolorum necessitatibus, est voluptatum repellat alias quis velit itaque? Repellat.
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur quibusdam fuga minus iure incidunt, ipsum hic, vel obcaecati sequi dolorum necessitatibus, est voluptatum repellat alias quis velit itaque? Repellat.`;
const contactContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur quibusdam fuga minus iure incidunt, ipsum hic, vel obcaecati sequi dolorum necessitatibus, est voluptatum repellat alias quis velit itaque? Repellat.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur quibusdam fuga minus iure incidunt, ipsum hic, vel obcaecati sequi dolorum necessitatibus, est voluptatum repellat alias quis velit itaque? Repellat.`;

app.get("/", (req, res) => {
  res.render("home", {
    homeStartingContent: homeStartingContent,
    posts: posts,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

var posts = [];

app.post("/compose", (req, res) => {
  const post = { title: req.body.title, content: req.body.post };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName", function (req, res) {
  // console.log(req.params.postName);
  // console.log(posts[0].title);
  for (let i = 0; i < posts.length; i++) {
    if (_.startCase(req.params.postName) === posts[i].title) {
      const posting = posts[i];
      res.render("post", { posting: posting });
    }
  }
});

app.listen(3000, () => {
  console.log("Server started on 3000");
});
