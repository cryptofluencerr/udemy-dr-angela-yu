const mongoose = require("mongoose");
// import { MongoClient } from 'mongodb'
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Pretty solid as a fruit.",
});

// fruit.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // for (let i = 0; i < fruits.length; i++) {
    //   console.log(fruits[i].name);
    // }
    fruits.forEach(function (fruit) {
      console.log(fruit);
    });
    mongoose.connection.close();
    console.log(fruits.length);
  }
});
