//import the data that is passed from client said from what a client types in for symptoms get that data exported from previous route. 
// build the RXNorm api so that the medicine can be called here organized then exported in another function.  
const { HelperMedicineRecommendation } = require('../controllers/analyzesymptoms.controller'); 
const externServiceAPI = async (req, res) => {  
    // store client side ssymptom medicine here  
    const medicineAdvised = HelperMedicineRecommendation; 
    return res.status(200).json({ 
        Message: medicineAdvised
    }); 
} 

module.exports = externServiceAPI; 
