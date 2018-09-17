var express = require('express')
var app = express();
app.set('view engine', 'ejs');

app.get('/home', function (req, res) {
    res.render('pages/home');
});

app.get('/students', function (req, res) {
    res.render('pages/home');

    connection.query('SELECT * from students', function (err, rows, fields) {
        if (err) throw err
      
        console.log('The solution is: ', rows[0].solution)
    })
});

app.get('/subjects', function (req, res) {
    res.render('pages/home');

    connection.query('SELECT * from subjects', function (err, rows, fields) {
        if (err) throw err
      
        console.log('The solution is: ', rows[0].solution)
    })
});

console.log('App is running at http://localhost:8081');
app.listen(8081);