const express = require('express'); 
const app = express(); 

//call routes here 
const symptomAnalyze = require('./routes/analyzesymptoms.route.js'); 

app.use(cors()); 
app.use(express.json()); // middleware to handle requests.    

app.get('/', (req, res) => { 
    res.json({ 
        Server: 'Running Successfully'
    }); 
});  

//mount the routes here as such 

module.exports = app; 

