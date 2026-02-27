const express = require('express'); 
const app = express();  
const cors = require('cors'); 

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
app.use('/api/v1/', symptomAnalyze); 

module.exports = app; 

