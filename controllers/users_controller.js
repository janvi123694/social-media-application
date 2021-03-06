
// importing user schema 
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
  /* if(req.isAuthenticated){   // if youre logged in and u go to the sign -in page-> ud be taken back to ur profile 
		 res.redirect('/users/profile'); 
	}
	else{*/
	console.log(req.password)
	return res.render('user_sign_in', {
	  title : "Codial | Sign In"
	});
	
   
}

//SIGN UP 
module.exports.create = function(req,res){
console.log(req.body); 
// check if pw is same as the confirm_password
  if(req.body.password!= req.body.confirm_password){
       return res.redirect('back'); 
  }

  // check if the email is unique ;  returns the first document that has email=== req.body.email
  User.findOne({email : req.body.email},function(err,user){
     if(err){ console.log("error in finding user for sign up "); return; }

	 if(!user){     // if user is not found ie unique 

			// creaing a schema 
	 		User.create(req.body,function(err,user){    

			if(err){ console.log("error while creating user"); return; }
		  
			return res.redirect("/users/sign-in");  // sign up pg ->sign in pg 
			});
	 }

	 else{
	 	   return res.redirect('back'); // redirect to sign up pg again 
	 }
  })
}

// sign in and create a session . assuming user has already signed in 
module.exports.createSession = function(req,res){
  return res.redirect('/'); 
}

module.exports.destroySession = function(req,res){
   req.logout() ; // inbuilt func by passport 
   return res.redirect('/'); 
}


