const express = require('express');
const bodyParser = require('body-parser');

// import router files
const userRoutes = require('./routes/user');
const filesRoutes = require('./routes/files');

const app = express();

// parses incomming request to json object
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// entry route for users
app.use('/api/v1/auth/users', userRoutes);

// entry route for files
app.use('/api/v1/files', filesRoutes);

module.exports = app;
