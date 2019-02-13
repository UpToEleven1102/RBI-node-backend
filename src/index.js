require('dotenv').config();

var db = require('./db/index');

var express = require('express');

var app = express();

db.open();

db.generateSchemas();

db.close();

app.get('/divisions', function(req,res){
    res.json({data: [{id: 0, name: "division 1"}]});
});

app.get('/players', function(req, res) {
    res.json({data: [{id: 0, name: "player 1"}]});
});

app.get('/teams', function(req, res) {
    res.json({data: [{id: 0, name: "team A"}]});
});

app.get('*', function(req,res){
    res.json({success: false, message: 'wrong route, buddy!'});
})

app.listen(8080, function(){
    console.log('listening on port 8080');
})

