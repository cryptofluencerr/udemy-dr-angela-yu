const express = require("express");
const ejs = require("ejs");
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
  res.render("home", { homeStartingContent: homeStartingContent });
});

app.listen(3000, () => {
  console.log("Server started on 3000");
});
