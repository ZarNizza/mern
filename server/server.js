const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" }); // in ths file you semi-securely )) store DB connection strings:
//ATLAS_URI=mongodb+srv://<YOUR-ATLAS-KEY>/<YOUR-ATLAS-DB>?retryWrites=true&w=majority
//PORT=5000
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
