require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");

//Import routes

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//database connection

const connection = require('./db'); 
connection();

//middlewares

app.use(express.json());
app.use(cors());

//routes

app.use("/api/users" , userRoutes);
app.use("/api/auth" , authRoutes);

app.listen(3001, ()=>{
    console.log("SERVER RUNNING IN PORT 3001")
});