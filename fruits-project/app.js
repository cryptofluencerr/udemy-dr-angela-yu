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
// _ids = [
//   "617a7e1a3e16d1b3b3f7a337",
//   "617a7e1a3e16d1b3b3f7a338",
//   "617a7ea9e5e49a334e5d43d8",
//   "617a7ea9e5e49a334e5d43d9",
//   "617a7ea9e5e49a334e5d43da",
//   "617a7ed063374fd9ac3bf5c2",
//   "617a7ed063374fd9ac3bf5c3",
//   "617a7ed063374fd9ac3bf5c4",
//   "617b9b53cfb39f066a6accee",
// ];
// Fruit.deleteMany({ _id: { $in: _ids } }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   }
// });

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
