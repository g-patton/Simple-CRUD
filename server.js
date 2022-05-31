// console.log('may the node be with you')

const express = require('express');
const bodyParser= require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://grahammpatton:1422Scales>@cluster0.5ejb1.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true
})
.then(client => {
console.log('Connected to Database')
})
.catch(error => console.error(error))

// ///////////////////////////////

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://grahammpatton:1422Scales>@cluster0.5ejb1.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
    console.log('listening on 3000')
    });
    //check by running node server.js

// app.get('/', (req, res) => {
//     res.send('Hello World')
//     })
    //run node server.js
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) => {
    console.log(req.body)
})

