require('dotenv').config();

const Conference = require('./models/conference');
const Player = require('./models/player');
const Team = require('./models/team');
const Stat = require('./models/stat')
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

async function seedConferences() {
    let content = await fs.readFileSync('conferences.json')
    const conferences = JSON.parse(content)

    console.log(conferences);
    conferences.forEach(c => Conference.createConference(c))
}

async function seedTeams() {
    let content = await fs.readFileSync('teams.json')
    const teams = JSON.parse(content)

    console.log(teams);
    teams.forEach(t => Team.createTeam(t))
}

async function seedPlayers() {
    // let content = await fs.readFileSync('players.json')
    // const players = JSON.parse(content)
   
    // content = await fs.readFileSync('teams_with_id.json')
    // const teams = JSON.parse(content)

    // // console.log(teams)
    // players.forEach(p => {
    //     team = teams.filter(t => {
    //         return t.university_name === p.university
    //     })

    //     p.team_id = team[0] ? team[0].id : -1
    // })
    // fs.writeFile('./players_with_id.json', JSON.stringify(players))

    let content = await fs.readFileSync('players_with_id.json')
    const players = JSON.parse(content)

    players.forEach(async player => {
        player_id = await Player.createPlayer({name: player.name, team_id: player.team_id, player_img: player.player_img, Class: player.playerInfo.Class, HT_WT: player.playerInfo.HT_WT, Hometown: player.playerInfo.Hometown, DOB: player.playerInfo.DOB  })
        if (player.stats.s2016 && player.stats.s2016.rush_attempt) {
            await Stat.createStat({player_id, year: 2016, ...player.stats.s2016})
        }
        if (player.stats.s2017 && player.stats.s2017.rush_attempt) {
            await Stat.createStat({player_id, year: 2017, ...player.stats.s2017})
        }
        if (player.stats.s2018 && player.stats.s2018.rush_attempt) {
            await Stat.createStat({player_id, year: 2018, ...player.stats.s2018})
        }
    })
}

async function seedData() {

    

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

    // db.generateSchemas();

    // await seedConferences();
    // await seedTeams();
    // const teams = await Team.getTeams()

    // fs.writeFile('./teams_with_id.json', JSON.stringify(teams))

    await seedPlayers()
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
