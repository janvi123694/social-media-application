// must contain index of all routes

const express = require('express'); 
const router = express.Router(); // to separate routers and  controllers
const homeController = require('../controllers/home_controller'); 


router.get('/',homeController.home); // route to homeController's home function  
router.use('/users',require('./users')); // router.use(/routername,require(./routefile))



module.exports = router; // to make it available to main index.js 

