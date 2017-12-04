const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const routes = require('./routes/index');
const app = express();

mongoose.connect('mongodb://localhost/test', err => { err ? console.log('could not connect server') : app.listen('3000', () => { console.log('SERVER UP')})
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('public'));

app.use('/', routes);


