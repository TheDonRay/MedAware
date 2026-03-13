// external service here which sends data to rxNorm API.  Remember that we are calling this external function from another controller.
// medicine Advised is the parameter that is from the users symptom.
const externalAPI = async (medicineAdvised) => {
  const endpoints = new URLSearchParams({
    name: medicineAdvised,
  });
  // made the URL here as such
  const URL = `https://rxnav.nlm.nih.gov/REST/drugs.json?${endpoints}`;

  // implement try and catch case here as such
  try {
    // set up the fetch request here such that it gets sent to the frontend UI and manipulating that data
    const getMedicalData = await fetch(URL); 

    if (!getMedicalData) { 
        throw new Error('Error not a valid medicine details found from Library');
    } 

    const resFromExternalAPI = await getMedicalData.json(); 

    if (!resFromExternalAPI) { 
        throw new Error('No data recieved from the external API'); 
    } 

    return resFromExternalAPI; 
  } catch (error) {
    console.log('Error recieving data from the backend', error); 
    return false; 
  }
};

module.exports = { externalAPI };
