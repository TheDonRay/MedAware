const mongoose = require("mongoose");
const URI = process.env.mongoURI;

const databaseConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database successfully connected");
  } catch (error) {
    console.error("Error connection to the database", error);
  }
};

module.exports = databaseConnection;
