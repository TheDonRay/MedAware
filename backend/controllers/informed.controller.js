const externalAPIInfo = require("../services/RxNormAPI.services.js"); 

const inforMedication = async (req, res) => {  
    const externalAPIdata = externalAPIInfo; 
    // route to get the medicine 
    res.status(200).json({ 
        Response: externalAPIdata
    }); 
};  


module.exports = inforMedication; 