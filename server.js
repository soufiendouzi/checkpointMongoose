// 1- require express 
const express = require ("express") ; 

//2- create instance 
const app = express ();

//5- require dotenv and config 

 require("dotenv").config(); 

// connect db 
const connectDB = require("./config/connectDB")
connectDB() ;

// 3- create port 
const PORT = 3000 ;

// 4-create server 
app.listen(PORT , err => {
    err  
    ? console.log (`failed to connect...${PORT}`)
     : console.log (`server is running on PORT  : ${PORT}`) 

});

