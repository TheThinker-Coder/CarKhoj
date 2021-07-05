
//const mongoose = require('mongoose')

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://CK123:CK@123@cluster0.m4fdf.mongodb.net/carK?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(`connection successful`);
  // perform actions on the collection object
  client.close();
});
