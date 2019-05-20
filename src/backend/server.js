const express = require('express');
const mongoose =require('mongoose');
const app = express();
const path = require('path');
var router= express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

//var url = "mongodb+srv://prasad:prasadadmin@cluster0-dwutd.mongodb.net/admin";
var url = "mongodb+srv://prasad:prasadadmin@cluster0-wgldq.gcp.mongodb.net/test-books";
//mongodb+srv://prasad:<password>@cluster0-wgldq.gcp.mongodb.net/test?retryWrites=true

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});*/
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/index", (req, res) => {
  MongoClient.connect(url, function(err, db) {
    var myobj = { name: req.body.firstName, address: req.body.lastName };
    console.log("document to be inserted",req.body);
 res.sendFile(__dirname + "/index.html");
  });

});
/*app.post("/addName", (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = req.body;
    var myobj = { name: req.body.firstName, address: req.body.lastName };
    console.log("document to be inserted",req.body);
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
    res.send('Data received:\n' + JSON.stringify(req.body));
});*/

app.post("/addName", (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = req.body;
    var myobj = { name: req.body.firstName, address: req.body.lastName };
    console.log("document to be inserted",req.body);
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
    res.send('Data received from addname router:\n' + JSON.stringify(req.body));
});
router.route('/addName')
    .post(function (req, res)  {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = req.body;
    var myobj = { name: req.body.firstName, address: req.body.lastName };
    console.log("document to be inserted",req.body);
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
    res.send('Data received:\n' + JSON.stringify(req.body));
});
app.listen(process.env.PORT || 3001);
