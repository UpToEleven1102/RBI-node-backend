require('dotenv').config();

const Conference = require('./models/conference');
const Player = require('./models/player');
const Team = require('./models/team');
const { scraping } = require('./db/scraping');
const fs = require('fs');

var db = require('./db/index');

const faker = require('faker');

var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

//db config
db.open();

async function seedData() {

    let content = await fs.readFileSync('conferences.json')
    const conferences = JSON.parse(content)

    console.log(conferences);
    

    // const content = await fs.readFileSync('players.json')
    // const players = JSON.parse(content)
    // let teams = [] 
    // players.forEach(player => {
    //     team = {
    //         name: player.team_name,
    //         university_name: player.university,
    //         team_img: player.team_logo
    //     }

    //     if (teams.filter(ele => ele.name === team.name).length === 0) {
    //         teams.push(team)
    //     } 
    // });

    // fs.writeFile("./teams.json", JSON.stringify(teams), function(err, data){
    //     if (err) console.log(err);
    //     console.log("Successfully Written to File.");
    // })

    // console.log(teams);

    db.generateSchemas();

    conferences.forEach(c => Conference.createConference({}))

    for (let i = 0; i < 10; i++) {
        Conference.createConference({ name: faker.name.findName(), member_number: faker.random.number() });
    }
};

seedData();

app.get('/conferences', function (req, res) {
    Conference.getConferences((data) => res.json({ success: true, data: data }));
});

app.get('/players', function (req, res) {
    Player.getPlayers(data => res.json({ success: true, data: data }));
});

app.get('/teams', function (req, res) {
    Team.getTeams(data => res.json({ success: true, data: data }));
});

app.post('/scrapping', function (req, res) {
    if (req.body.idx && !isNaN(req.body.idx))
        scraping(req.body.idx).then(response => res.json({ success: true, data: response }))
            .catch(err => res.json({ success: false, data: err }));
    else { 
        res.json({success: false, data: "missing idx"});
    }
})

app.get('*', function (req, res) {
    res.json({ success: false, message: 'wrong route, buddy!' });
})

app.listen(8080, function () {
    console.log('listening on port 8080');
})
