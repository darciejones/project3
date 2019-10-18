const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./users');
const express = require('express');
const app = express();



mongoose.connect('mongodb://localhost/signup')
 
    .then(() => console.log("Now connected to mongodb"))
    .catch(err => console.error('Something went wrong', err));


    app.use(express.json());
    app.use('/api/users', users);

    const port = process.envPORT || 3000;
    app.listen(port, () => console.log('Listening on port ${port}...'));

