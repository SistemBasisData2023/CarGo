// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://api.football-data.org/v4/competitions/PL/matches",
//   headers: {
//     "X-Auth-Token": "2b27b414aeaf425faa34d897d3375ac0",
//   },
// };

// async function fetchData() {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

//import packages
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const { connectToDB } = require("./config/connectToDb");
const loginRegisterRoute = require("./routes/loginRegisterRoute");

//initialize the app as an express app
const app = express();
const PORT = process.env.PORT || 5000;
const router = express.Router();
const { Client } = require("pg");
const bcrypt = require("bcrypt");

//Connecting to database
connectToDB();

//Middleware
app.use(express.json());

//Routes
app.use("/", loginRegisterRoute);

//listen on port
app.listen(PORT, () => {
  console.log("Server Running on port " + PORT);
});
