const express = require('express'); 
const router = express.Router(); // to separate routers and  controllers

const usersController = require('../controllers/users_controller'); // import user controller

router.get('/profile',usersController.profile); // /users/profile -> call usersController.profile

module.exports= router; // exporting to index.js so that route is accessible 