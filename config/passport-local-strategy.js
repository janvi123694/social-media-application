const passport = require('passport'); 

const localStrategy = require('passport-local').Strategy; 

const User = require('../models/user');

//authentication using passport 

passport.use(new localStrategy ({
  usernameField: 'email'
 },
 function(email,password,done){ // done -> inbuilt for rpassport
    // find the user and establish teh identity 
	User.findOne({email: email} , function(err,user){
	   if(err){
	   	   console.log("error while finding the user->passport"); 
		   return done(err); // report an err to passport 
	   }
	   if(!user || user.password != password){    // done(err, boolean val indicating the status of auth)
	   	   console.log("Invalid Username/Password"); 
		   return done(null,false); 
	   }
	   
	   return done(null,user); 

	});
 }
  
));


// Once the authentication is completed, SERIALIZE ->decide which key must be kept in the cookie 
passport.serializeUser(function(user , done){
  done(null , user.id); // i want the encrypted id to be stored in teh session cookie 
});


//DESIERIALIZE the user via the key in teh user. teh key is used to establish teh ideantity of teh user 
passport.deserializeUser(function(id,done){
   User.findById(id , function(err,user){
     if(err){
	 	 console.log("error in finding theuser"); 
		 return done(err); 
	 }
	 return done(null,user); 
   })
})


//chcej if user has signed in in / is authenticated
//If user is logged in, passport.js will create user object in req for every request in express.js,

passport.checkAuthentication = function(req,res,next){
  if(req.isAuthenticated()) {  // isAuthenticated()-> built in method 
    return next();              // pass on req to next func/ mw
  }
  
  // else 
  return res.redirect('/users/sign-in'); 
}

passport.setAuthenticatedUser = function(req,res,next){
	if(req.isAuthenticated()){
	  res.locals.user = req.user ; // res.user contains info abt current logged in user 
	}
	next(); 
}

module.exports = passport; 