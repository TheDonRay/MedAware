const express = require('express'); 
const analyzesymp = express.Router(); 
const analyzecontroller = require('../controllers/analyzesymptoms.controller.js'); 

analyzesymp.post('/analyzesymptoms', analyzecontroller); 

module.exports = analyzesymp; 