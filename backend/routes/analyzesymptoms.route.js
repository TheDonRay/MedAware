const express = require("express");
const analyzesymp = express.Router();
const analyzecontroller = require("../controllers/analyzesymptoms.controller.js");

analyzesymp.post("/analyzesymptom", analyzecontroller.analyzeSymptoms);

module.exports = analyzesymp;
