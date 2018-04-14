var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var engine = require('ejs-locals');
app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
})

app.get('/TheoWei',function(req,res){
    res.render('theowei');
})
app.get('/#',function(req,res){
    res.render('#');
})
app.get('/#',function(req,res){
    res.render('#');
})
app.get('/#',function(req,res){
    res.render('#');
})

app.listen(3000);