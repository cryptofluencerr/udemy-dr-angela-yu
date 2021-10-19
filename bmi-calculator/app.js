const express = require("express");

let app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmi-calculator.html");
});

app.post("/bmicalculator", (req, res) => {
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  var bmi = parseFloat(weight / Math.pow(height, 2)).toFixed(2);
  if (bmi < 18.5) {
    res.send("Your BMI is " + bmi + " and you are underweight.");
  } else if (bmi > 18.5 && bmi < 24.9) {
    res.send("Your BMI is " + bmi + " and you are normal.");
  } else {
    res.send("Your BMI is " + bmi + " and you are overweight.");
  }
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
