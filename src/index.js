require('dotenv').config();

const Conference = require('./models/conference');
const Player = require('./models/player');
const Team = require('./models/team');

var db = require('./db/index');

const faker = require('faker');

var express = require('express');

var app = express();

//db config
db.open();
// db.generateSchemas();


function seedData(){
    // for (var i = 0; i<10; i++) {
    //     Conference.createConference({name: faker.name.findName(), member_number: faker.random.number()});
    // }

    for (let i=0; i<10; i++) {
        Conference.createConference({name: faker.name.findName(), member_number: faker.random.number()});
        for (let j=0; j<10; j++) {
            Team.createTeam({name: faker.random.word(), university_name: faker.random.word(), conference_id: i+1});
            for (let k=0; k<10; k++) {
                //    (name, team_id, rush_yds, rush_attempt, rec_yds, catches, rush_td, rec_td, fumbles)
                Player.createPlayer({
                    name: faker.random.word(),
                    team_id: j+1,
                    rush_yds: faker.random.number(),
                    rush_attempt: faker.random.number(),
                    rec_yds: faker.random.number(),
                    catches: faker.random.number(),
                    rush_td: faker.random.number(),
                    rec_td: faker.random.number(),
                    fumbles: faker.random.number(),
                })
            }
        }
    }
};


// seedData();

app.get('/conferences', function(req,res){
    Conference.getConferences((data) => res.json({success: true, data: data}));
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


