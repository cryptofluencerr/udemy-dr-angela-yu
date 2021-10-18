const express = require("express");

const app = express();

// bodyParser.json/text/urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // __Dirname is used to detect the path of the directory
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Solution is " + result);
  console.log("Solution is " + result);
  //   let num1 = req.body.num1;
  //   let num2 = req.body.num2;
  //   var result = num1 + num2;
  //   res.send("Calculation is " + result);
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
