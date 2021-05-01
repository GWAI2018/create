const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();
const conferenceRoute=require('./routes/conference-route');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

//BodyParser Middleware
app.use(bodyParser.json());

// conference route
app.use('/conference',conferenceRoute);


//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));