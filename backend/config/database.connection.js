const mongoose = require("mongoose");
const mongoURI = process.env.URI;

const databaseConnection = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database successfully connected");
    return;
  } catch (error) {
    console.error("Error connection to the database", error);
    return;
  }
};

module.exports = databaseConnection;
