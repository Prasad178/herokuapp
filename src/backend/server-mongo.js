const express = require('express');
const mongoose =require('mongoose');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = "mongodb+srv://prasad:prasadadmin@cluster0-dwutd.mongodb.net/admin";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
app.use("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});


app.listen(process.env.PORT || 3001);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
