const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const { connectToDB } = require("./src/config/connectToDb");
const loginRoutes = require("./src/routes/loginRoute");
const mainRoutes = require("./src/routes/mainRoute");

//initialize the app as an express app
const app = express();
const PORT = process.env.PORT || 5000;
const router = express.Router();
const { Client } = require("pg");
const bcrypt = require("bcrypt");

//Connecting to database
connectToDB();

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.use("/", loginRoutes);
app.use("/", mainRoutes)

//listen on port
app.listen(PORT, () => {
  console.log("Server Running on port " + PORT);
});
