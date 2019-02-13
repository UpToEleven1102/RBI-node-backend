var express = require('express');
require('dotenv').config();

var app = express();

app.get('/divisions', function(req,res){
    res.json({data: [{id: 0, name: "division 1"}]});
});

app.get('*', function(req,res){
    res.json({success: false, message: 'wrong route, buddy!'});
})

app.listen(8080, function(){
    console.log('listening on port 8080');
})

