require("dotenv-safe").config();
const express = require("express");
const { PORT } = require("./constants");
const constants = require("./constants");
const { MongoClient } = require("mongodb");
const app = express();

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

//console.log(books);
app.get("/", (req, res, next) => {
  res.send("hello from index.js main");
});
app.use("/books", require("./routers/books"));
app.use(express.json)


app.get("/getname", (req, res, next) => {
  res.send("hello from ammya");
});

app.post("/", (req, res, next) => {
  res.send("Post request");
});

app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});
