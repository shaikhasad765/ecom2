// Importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// Initializing Port
const port = 8000;

// Initializing express
const app = express();

// Using body parser to parse over the request body
app.use(bodyParser.json());

// Set response headers
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Pretty-JSON', 'true');
    next();
});

// Using Routes
app.use('/products', require('./routes/products'));

// Starting the server
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
