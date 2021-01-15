const User = require('../models/user'); 

//RENDER  PROFILE PG -> /users/profile
module.exports.profile= function(req,res){
	return res.render('user_profile', {
	  title : "User Profile"
	});
}

//RENDER SIGN UP PG ->    /users_signup
module.exports.signUp = function(req,res){   // sending data to user_sign_up ejs file 
	return res.render('user_sign_up', {
	 title : "Codial | Sign Up"
	});
}
//RENDER SIGN IN PG 
module.exports.signIn = function(req,res){
   
	return res.render('user_sign_in', {
	  title : "Codial | Sign In"
	});
}

module.exports.create = function(req,res){
  /*if(req.body.password!= req.body.confirm_password){
  	  return res.redirect('back'); 
  }
  User.findOne({req.body.email},function(err,user){
     if(err){ console.log("error in finding user for sign up "); return; }
	 if(!user){
	 	 User.create(req.body,function(err,user){
		  if(err){ console.log("error while creating user"); return; }
		  
		  return res.redirect("/users/sign-in"); 
		 })
	 }
  }*/
}
module.exports.createSession = function(){

}