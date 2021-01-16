/*const express = require('express'); 
const cookieParser= require('cookie-parser'); 
const app = express();
const port = 8000; 

const expressLayouts = require('express-ejs-layouts'); 
const db = require('./config/mangoose');   // index.js and config are on the same level


// ROUTES -> using express's router 
app.use('/',require('./routes/index'));// app.use() -> global MIDDLEWARE  ./rountes/index is equival to /index. index.js is taken as the default val 


const session = require('express-session'); // library ; used to encrypt teh user id and store it in the session cookie 
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy'); 



/*
app.use() acts as a middleware in express apps. 
Unlike app.get() and app.post() or so, you actually can use app.use() without specifying the request URL. 
*/
/*
app.use(express.urlencoded()); // parses ur form data. during post req 
app.use(cookieParser());	


// set up the view engine
app.set('view engine','ejs'); // set up view engine 
app.set('views', './views'); // set path for views folder 



 app.use(express.static('./assets')); 
 app.use(expressLayouts);  // need to do this before the routes. since routes needs layouts to be rendered

app.set('layout extractStyles',true); // extract style and scripts from the subpages into the layout 
app.set('layout extractScripts',true); 



// MW taht takes in teh session cookie and encrypts it 
app.use(session({
	  name : 'codial' ,// name of cookie
	  secret: 'abc', 
	  saveUninitialized : false, 
	  resave : false, 
	  cookie : {
  		  maxAge : (1000 *60*100) // states the maximum amount of time in seconds that fetched responses are allowed to be used again 
	  }
})); 

// tell teh app to use passport
app.use(passport.initialize);
app.use(passport.session()); 


app.listen(port,function(err){
	if(err){
		console.log(`error in running server: ${err}`); 
	    return ; 
	}
	else{
	   console.log(`server is runnng on port ${port}`); 
	}
}); 

*/

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mangoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const mongoStore = require('connect-mongo')(session);  // store session cookie in db else we d  our cookie wud be deleted evertime we restart our server 
const sassMiddleware = require('node-sass-middleware'); 


app.use(sassMiddleware({
  src : "./assets/scss",
  dest : "./assets/css",
  debug : true , 
  outputStyle : 'extended', // accross many lines 
  prefix : '/css'

}))
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
    name: 'codeial',
    // TODO change the secret key re deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }, 
	store : new mongoStore({
	       mongooseConnection : db,
		   autoRemove: 'disabled'
	}), 
	function(err){
		console.log(err || 'successful')
	}
}));

app.use(passport.initialize());
app.use(passport.session());

// when a req is coming in setAuthenticatedUser mw gets called. req.user is set in the locals . therefore user wud b accessible to the views
app.use(passport.setAuthenticatedUser);

// use express router
// app.use() -> global MIDDLEWARE  ./rountes/index is equival to /index. index.js is taken as the default val 
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
