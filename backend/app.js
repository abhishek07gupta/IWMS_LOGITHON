// core modules/3rd party 
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
// importing Routes 

// working :
const app = express();//and here express is a function.

app.use(bodyParser.json());//important use case before any other middleware

// Routes

// 404 page // Default Endpoint
app.use();

app.listen(3000);