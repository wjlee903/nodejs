const express = require('express');
const app = express();

app.locals.pretty=true;
app.use(express.static(__dirname + "/public"))

app.set("view engine", 'jade');
app.set("views", './views2');

app.get("/", function(req, res){
    res.render("home", {name: 'eunbee'});
});
app.get('/about', function(req, res){
    res.render('about')
});

app.listen(3000, function () {
    console.log("Connection 3000 port!!");
});