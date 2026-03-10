
// external service here which sends data to rxNorm API.  Remember that we are calling this external function from another controller.  
const externalAPI = async (medicineAdvised) => {  
    const endpoints = new URLSearchParams({ 
        name: medicineAdvised
    });  
    // made the URL here as such 
    const URL = `https://rxnav.nlm.nih.gov/REST/drugs.json?${endpoints}`; 
    
    return URL;  
} 

module.exports = { externalAPI }; 