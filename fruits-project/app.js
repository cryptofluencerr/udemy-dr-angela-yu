const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db("fruitsDB");
  const collection = db.collection("fruits");

  //   const insertResult = await collection.insertMany([
  //     { name: "Apple", score: 8, review: "Great fruit" },
  //     { name: "Orange", score: 6, review: "Kinda sour" },
  //     { name: "Banana", score: 89, review: "Great " },
  //   ]);
  //   console.log("Inserted documents =>", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
