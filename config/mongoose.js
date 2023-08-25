// Importing packages
const mongoose = require('mongoose');

// Connecting mongoose to the Atlas MongoDB server and the ECOM database
mongoose.connect('mongodb+srv://shaikhasad765:Asad12345@cluster0.jaoadsc.mongodb.net/ECOM?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// Reference to the mongoose connection object
const db = mongoose.connection;

// Error handling for database connection
db.on('error', console.error.bind(console, "Error connecting to Database"));

// Once the connection is open, log a success message
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;