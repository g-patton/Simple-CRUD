// console.log('may the node be with you')

const express = require('express');
const app = express();

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