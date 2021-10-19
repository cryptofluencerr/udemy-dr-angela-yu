const { response, json, urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

//require https module
const https = require("https");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = "962ae34e9a6144ea8edfd1d14f9c0108";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    units;
  // getting api data
  https.get(url, (response) => {
    console.log(response);
    // console.log(response.headers);
    // getting data from API
    response.on("data", (data) => {
      const weather = JSON.parse(data);
      let city = weather.name;
      let tempMin = weather.main.temp_min;
      let tempMax = weather.main.temp_max;
      let desc = weather.weather[0].description;
      let image = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
      console.log(image);
      // res.write can also be used and at last res.send()
      res.send(`
      <p>The weather is currently ${desc} </p>
      <h4>City: ${city}
      <br>
      Minimum Temp: ${tempMin}
      <br>
      Maximum Temp: ${tempMax}
      <br>
      Description: ${desc}</h4>
      <img src="${image}">`);
    });
  });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000...`);
});
