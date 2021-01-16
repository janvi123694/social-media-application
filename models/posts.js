const mongoose = require('mongoose'); 
const postSchema = mongoose.Schema({
  content : {
  	  type: String , 
	  required : true
  }, 
  user : {
  	  type: mongoose.Schema.Types.ObjectId, // every obj has an unique id; every post is associated eith an unique user
	  ref: "User" , // refer User schema 
  }
} , { 
  timestamps : true // for createdAt updated At
}); 


//When you call mongoose.model() on a schema, Mongoose compiles a model for you.
const Post = mongoose.model('Post',postSchema); // name of scehma ->Post.


module.exports = Post; 