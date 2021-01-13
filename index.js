const express = require('express'); 
const app = express(); 
const port = 8000; 

// using express router 
app.use('/',require('./routes/index'))  // app.use() -> global MIDDLEWARE 

app.set('view engine','ejs'); // set view engine 
app.set('views', './views'); // set path for views folder 

app.listen(port,function(err){
	if(err){
		console.log(`error in running server: ${err}`); 
	    return ; 
	}
	else{
	   console.log(`server is runnng on port ${port}`); 
	}
}); 