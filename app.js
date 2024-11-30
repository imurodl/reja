console.log("Web serverni boshlang");
const express = require("express");
const app = express();

// for author js
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});
// for author js

// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// MongoDB connect

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs"); // BSSR

// 4: Routing code
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");

  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  console.log("user entered /delete-item");

  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  console.log("user entered /delete-all");

  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "all plans deleted" });
    });
  }
});

app.post("/edit-item", (req, res) => {
  console.log("user entered /edit-item");

  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.get("/author", (req, res) => {
  console.log("user entered /author");
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");

  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
