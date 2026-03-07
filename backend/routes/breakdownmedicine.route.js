const express = require('express'); 
const infomedication = express.Router(); 
const infomedcontroller = require('../controllers/infomed.controller'); 

// going to be a get request on the data that is recieved from the rxnorm API since its an external API service in the RxNormAPI.services.js  
infomedication.get('/medicineinfo', infomedcontroller);  

module.exports = infomedication; 