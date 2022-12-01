import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

await mongoClient.connect();

db = mongoClient.db("drivencracy");

const pollsCollection = db.collection("poll");

// try {
//   await mongoClient.connect();
//   db = mongoClient.db("drivencracy");
//   pollsCollecion = db.collection("poll");
// } catch (err) {
//   console.log(err);
// }

export {pollsCollection};
