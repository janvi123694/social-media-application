const express = require('express'); 
const router = express.Router(); // to separate routers and  controllers
const homeController = require('../controllers/home_controller'); 


router.get('/',homeController.home); // route to homeController's home function  

module.exports = router; // to make it available to main index.js 