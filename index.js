const express = require('express');
const handlebars = require("express-handlebars");
const moment = require('moment');
const { urlencoded, json } = require("body-parser");
const path = require('path');
const axios = require('axios');
const app = express();
const port = 3000;
moment.locale("tr");

app.use(json());
app.use(urlencoded({ limit: "50mb", extended: false }));
app.engine("handlebars", handlebars({ defaultLayout: "main", layoutsDir: `${__dirname}/views/layouts/` }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});