const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codial_development');  // providing a connection to my db; local host since my DB ie mongo is rubnning on the same system 
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));//console.error -> displays log like an error

db.once('open', function() {
  console.log("We're connected to mongodb"); 
});

module.exports=db; 