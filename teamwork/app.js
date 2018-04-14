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
app.get('/rching',function(req,res){
    res.render('rching');
})
app.get('/yuchi',function(req,res){
    res.render('yuchi');
})
app.get('/hsieh',function(req,res){
    res.render('hsieh');
})

app.listen(3000);