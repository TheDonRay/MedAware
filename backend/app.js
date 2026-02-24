const express = require('express'); 
const app = express(); 


app.use(express.json()); // middleware to handle requests.   

app.get('/', (req, res) => { 
    res.json({ 
        Server: 'Running Successfully'
    }); 
}); 

