const http = require('http');
const fs = require('fs');
const path = require('path');

const country = require('./english.json');
const express = require('express');
const app = express();
const port = 3000

app.use('/public',express.static('public'))
app.set('view engine', 'ejs');
app.get('/',function (req, res) {
    res.render('index',{title: country})
});
app.listen(port, () => console.info(`App listening on port ${port}`))

