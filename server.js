// console.log('may the node be with you')

const express = require('express');
const bodyParser= require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://grahammpatton:1422Scales>@cluster0.5ejb1.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true
})
.then(client => {
console.log('Connected to Database')
const db = client.db('star-wars-quotes')
const quotesCollection = db.collection('quotes')

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    db.collection('quotes').find().toArray()
    .then(results => {
        res.render('index.ejs', { quotes: results })
        })
        
    .catch(error => console.error(error))
    // ...
    res.render('index.ejs', {})
    })
    
app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
    .then(result => {
    res.redirect('/')
    })
    .catch(error => console.error(error))
    })
    
app.listen(3000, function() {
    console.log('listening on 3000')
    });
    //check by running node server.js
app.set('view engine', 'ejs')

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



