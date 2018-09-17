var express = require('express')
var app = express();
app.set('view engine', 'ejs');

app.get('/home', function (req, res) {
    res.render('pages/home');
});

console.log('App is running at http://localhost:8081');
app.listen(8081);