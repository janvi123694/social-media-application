const express = require('express'); 
const router = express.Router(); // to separate routers and  controllers
const passport = require('passport'); 



const usersController = require('../controllers/users_controller'); // import user controller
 

 // only signed in users can view teh profile pg. passport.checkAuthentication is a func in passport-local-strategy.js
router.get('/profile',passport.checkAuthentication , usersController.profile); // /users/profile -> call usersController.profile

router.get('/sign-up',usersController.signUp); 
router.get('/sign-in',usersController.signIn); 

router.post('/create',usersController.create); 

// passport is being used as a middle ware to authenticate 
/*
passport preforms authentication. 
if authenticated-> done returns the user
else redirects to sign in pg 
*/

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);

router.get('/sign-out',usersController.destroySession); 


module.exports= router; // exporting to index.js so that route is accessible 