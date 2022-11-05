const { MongoClient } = require("mongodb");
const { MONGO_URL, DB_NAME } = require("../constants");

const db = (async () => {
  const ConnectionURL = MONGO_URL;
  const client = new MongoClient(ConnectionURL);
  console.log(ConnectionURL);
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(DB_NAME);
  } catch (err) {
    console.log("Some error occured while connecting to DB", err);
  }
})();

module.exports = db;
