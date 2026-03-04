require("dotenv").config();
const app = require("./app.js");
//call the database here as such
const databaseConnection = require("./config/database.connection.js");
//invoke the connection
databaseConnection();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
