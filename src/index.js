require('dotenv').config();
var express = require('express');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
    host: process.env.MYSQL_SERVER,
    database: process.env.MYSQL_DB_NAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
})

connection.connect(function(err){
    if(err){
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
})

app.get('/divisions', function(req,res){
    res.json({data: [{id: 0, name: "division 1"}]});
});

app.get('*', function(req,res){
    res.json({success: false, message: 'wrong route, buddy!'});
})

app.listen(8080, function(){
    console.log('listening on port 8080');
})

