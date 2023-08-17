const express = require('express');
const app = express();
const db = require('./config/mongoose');
const cors = require('cors');
require('dotenv').config();

// Use the CORS middleware
app.use(cors());
// Add body parsing middleware
app.use(express.json());

app.use('/api/v1', require('./routes'));


// server start here 
app.listen(process.env.PORT, function(err){
    if(err){
        console.log("Error", err);
    }
    console.log("Server running on port:: 8000");
});