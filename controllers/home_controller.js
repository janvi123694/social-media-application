module.exports.home = function(req,res){  // module.exports.action  = function() ; router calls these controller functions
	return res.end('<h1> express is up </h1>'); 
}