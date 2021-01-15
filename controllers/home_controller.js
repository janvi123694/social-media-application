module.exports.home = function(req,res){  // module.exports.action  = function() ; router calls these controller functions
 console.log(req.cookies); 
 res.cookie('user_id',100);
	return res.render('home',{  // renders a view called home using ejs view engine
	 title : "home"  // pass it to ejs
	}); 
}