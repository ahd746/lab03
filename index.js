require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Mongo 
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => { console.log('Connected to DB') })
  .catch(err => console.error(`Error: ${err}`));

// Implement Body Parser
//const bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
// register the routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

// error handling
const { handle404s, errorHandler } = require('./errorHandling');
app.use(handle404s);
app.use(errorHandler);

//Set the port and listen 
PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));