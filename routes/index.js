// must contain index of all routes . CENTRAL ROUTE  

const express = require('express'); 

const router = express.Router(); 
const homeController = require('../controllers/home_controller'); 


router.get('/',homeController.home); // route to homeController's home function  
router.use('/users',require('./users')); // router.use(/routername,require(./routefile))

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router; // to make it available to main index.j

