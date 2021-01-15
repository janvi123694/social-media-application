// CREATE USER SCHEMA 
const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({  // 1 user's deatils -> {id, pw,name}
  email : {
  	  type: 'String', 
	  required : true , 
	  unique: true
  } , 
  password : {
  	  type: 'String',
	  required : true
  },
  name:{
  	  type: 'String',
	  required: true
  }
}, {
  timestamps: true // craetedAt, updated at . when u create a new obj db must store fields called created at , updated at 
});

const User = mongoose.model('User', userSchema);  // set name of schema 
module.exports = User;