// core modules/3rd party 
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// importing Routes 
// const processing = require('./routes/processing');
const analytics = require('./routes/analytics');

// importing models 
const sequelize = require('./util/database');
const Admin = require('./models/admin');
const Compartment = require('./models/compartment');
const Item = require('./models/item');



// -------------------------------------------------

// working :
const app = express();//and here express is a function.

app.use(bodyParser.json());//important use case before any other middleware

// Routes
// app.use('/processing', processing);
app.use('/analytics', analytics);

// error handler
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Problem at server end";
    res.status(status).json({ message: message });
})

sequelize.sync({alter : false})
    .then(synced => {
        app.listen(process.env.PORT);
    })
    .catch(err => console.log(err));