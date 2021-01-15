const express = require('express'); 
const app = express();
const port = 8000; 
const cookieParser= require('cookie-parser'); 
const expressLayouts = require('express-ejs-layouts'); 
const db = require('./config/mangoose');   // index.js and config are on same level 

 app.use(express.static('./assets')); 


app.use(expressLayouts);  // need to do this before the routes. since routes needs layouts to be rendered

app.set('layout extractStyles',true); // extract style and scripts from the subpages into the layout 
app.set('layout extractScripts',true); 

app.use(express.urlencoded()); // parses ur form data. during post req 
app.use(cookieParser());	


// ROUTES -> using express's router 
app.use('/',require('./routes/index')); // app.use() -> global MIDDLEWARE


// set up the view engine
app.set('view engine','ejs'); // set up view engine 
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

/*
notes 
app.use() acts as a middleware in express apps. 
Unlike app.get() and app.post() or so, you actually can use app.use() without specifying the request URL. 
In such a case what it does is, it gets executed every time no matter what URL's been hit.

npm start - put it in package .json start-> nodemon index.js 
*/