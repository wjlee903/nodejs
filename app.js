const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const mysql = require('mysql');
const bodyParser = require('body-parser');

var client = mysql.createConnection({
  user: 'root',
  password: '1234',
  database: 'Company'
});

const server = express();

server.use(express.static(__dirname + "/public"))

server.set('html', ejs.renderFile);
server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');        // directory 인식 
server.set('layout', 'layouts/layout');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(expressLayouts);

server.get('/', function (req, res) {
  client.query('SELECT * FROM board order by id desc', function (err, result) {
    res.render('home', {
      list: result
    })
  })
});
server.get('/about', function (req, res) {
  let data = req.query;
  res.render('about', {
    data: data
  });
});

server.post('/about', function (req, res) {
  console.log(req.body);
  let data = req.body;
  res.render('about', {
    data: data
  });
});

server.listen(3000, () => {
  console.log("localhost:3000")
});