const express = require('express'); 
const router = express.Router(); // to separate routers and  controllers

const usersController = require('../controllers/users_controller'); // import user controller
 
router.get('/profile',usersController.profile); // /users/profile -> call usersController.profile

router.get('/sign-up',usersController.signUp); 
router.get('/sign-in',usersController.signIn); 

module.exports= router; // exporting to index.js so that route is accessible 