require('dotenv').config();

const Division = require('./models/divisions');
const Player = require('./models/players');
const Team = require('./models/teams');

var db = require('./db/index');

const faker = require('faker');

var express = require('express');

var app = express();

//db config
db.open();
db.generateSchemas();


function seedData(){
    for (var i = 0; i<10; i++) {
        Division.createDivision({name: faker.name.findName()});
    }
};


seedData();

app.get('/divisions', function(req,res){
    Division.getDivisions((data) => res.json({success: true, data: data}));
});

app.get('/players', function(req, res) {
    Player.getPlayers(data => res.json({success: true, data: data}) );
});

app.get('/teams', function(req, res) {
    Team.getTeams(data => res.json({success: true, data: data}));
});

app.get('*', function(req,res){
    res.json({success: false, message: 'wrong route, buddy!'});
})

app.listen(8080, function(){
    console.log('listening on port 8080');
})


