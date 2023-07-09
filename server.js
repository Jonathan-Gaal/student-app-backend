//Server.js
//Import the app
//start up and listen
require("dotenv").config();

const app = require("./app");

//include a default port (9000 here) in case there is no port in the env file
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
