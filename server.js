const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// import router files
const userRoutes = require('./routes/user');
const filesRoutes = require('./routes/files');

const app = express();
const port = 3000;

// connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localHost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// parses incomming request to json object
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// entry route for users
app.use('/api/v1', userRoutes);

// entry route for files
app.use('/api/v1/file', filesRoutes);

app.listen(port, () => console.log(`Server listening on ${port}`));

module.exports = app;
