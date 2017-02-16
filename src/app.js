'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const oauthserver = require('oauth2-server');
const model = require('./models/main.js');

const app = express();

app.oauth = new oauthserver({
    model: model,
    grants: ['password'],
    debug: true
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Inicio');
});

app.post('/token', app.oauth.grant());

app.use(app.oauth.errorHandler());



app.listen(3000, () => {
    console.log('Express server started on port 3000'); // eslint-disable-line
});
