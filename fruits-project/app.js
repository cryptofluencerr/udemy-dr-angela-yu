const mongoose = require("mongoose");
// import { MongoClient } from 'mongodb'
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry no name specified"],
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
// const fruit = new Fruit({
//   name: "asdad",
//   rating: 10,
//   review: "asdsa asdsad as a sdasada.",
// });

// Fruit.insertMany(
//   [{ name: "dfsfsdf", rating: 5, review: "fdsdsf sdfsdfsd!" }],
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully saved all the fruits to fruitsDB");
//     }
//   }
// );

// Fruit.deleteOne({ name: "dfsfsdf" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted successfully!!");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
    mongoose.connection.close();
    console.log(fruits.length);
  }
});
