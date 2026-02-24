const express = require('express'); 
const app = express(); 


app.use(express.json()); // middleware to handle requests.    

const PORT = process.env.PORT; 

app.get('/', (req, res) => { 
    res.json({ 
        Server: 'Running Successfully'
    }); 
});  

app.listen(PORT, () => { 
    console.log(`Server is up and running on http://localhost:PORT`); 
}); 

module.exports = app; 

