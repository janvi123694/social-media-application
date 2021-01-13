const express = require('express'); 
const app = express(); 
const port = 8000; 


app.listen(port,function(err){
	if(err){
		console.log(`error in running server: ${err}`); 
	    return ; 
	}
	else{
	   console.log(`server is runnng on port ${port}`); 
	}
}); 