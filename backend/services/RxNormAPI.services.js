
// add mongodb schema here below 


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
      throw new Error("Error not a valid medicine details found from Library");
    }

    const resFromExternalAPI = await getMedicalData.json();

    if (!resFromExternalAPI) {
      throw new Error("No data recieved from the external API");
    } 

    // TODO: going to map this data to like object then export that. 
    const rxcuiData = resFromExternalAPI.map((fields) => ({ 
        rxcui:fields.drugGroup.conceptGroup.contentProperties, 
        name: fields.drugGroup.conceptGroup.name,  
        synonym: fields.drugGroup.conceptGroup.synonym, 
    })); 

    console.log('Medical Information recieved:', rxcuiData); 

    return rxcuiData; 
  } catch (error) {
    console.log("Error recieving data from the backend", error);
    return false;
  }
};

module.exports = { externalAPI };
