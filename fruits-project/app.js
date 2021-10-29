const mongoose = require("mongoose");
// or as an es module:
// import { MongoClient } from 'mongodb'
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
      console.log(fruit.name);
    });
    mongoose.connection.close();
    console.log(fruits.length);
  }
});

Fruit.deleteMany({ name: "Karan" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the document");
  }
});

// Fruit.updateOne(
//   { _id: "617b9bb756bedcba4f7e12a6" },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfuly updated the document");
//     }
//   }
// );

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "John",
//   age: 37,
// });
