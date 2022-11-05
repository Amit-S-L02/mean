const router = require("express").Router();
const { ObjectID } = require("bson");
const db = require("../config/db");
// const {COLLECTION:{

// }}
// let counter = 0;
// const books = [
//   {
//     id: ++counter,
//     name: "Physics",
//   },

//   {
//     id: ++counter,
//     name: "Chemistry",
//   },

//   {
//     id: ++counter,
//     name: "Biology",
//   },
// ];
router.get("/:id", async (req, res, next) => {
  const od = req.params.id;

  const dbo = await db;
  const library = dbo.collection(LIBRARY);
  const books = await library.findOne({ _id: ObjectId(id) });
  if (!book) throw new Error("Book mot found");
  res.json(books);
});

router.post("/", async (req, res, next) => {
  const dbo = await db;
  const library = dbo.collection(LIBRARY);
  const book = {
    name: "Physics",
    author: "ASL",
    publisher: "KKK",
  };
  const results = await library.insertOne(book);
  res.json(result);
});
module.exports = router;
