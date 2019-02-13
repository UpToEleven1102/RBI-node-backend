var mysql = require('mysql');
const Division = require('../models/divisions');

var connection = mysql.createConnection({
    host: process.env.MYSQL_SERVER,
    database: process.env.MYSQL_DB_NAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
})

const open = () => {
    connection.connect(function (err) {
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);
    })
}

const close = () => {
    connection.end();
}

generateSchemas = () => {
    var divisionsSchema = `CREATE TABLE divisions (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(64));`;
    var teamsSchema = `CREATE TABLE teams (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(64) NOT NULL,
        coach VARCHAR(64) NULL,
        division_id INT,
        FOREIGN KEY (division_id)
            REFERENCES divisions(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
        );`;

    var playersSchema = `CREATE TABLE players (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(64) NOT NULL,
        team_id INT,
        rush_yds FLOAT,
        rec_yds FLOAT,
        catches INT,
        rush_td FLOAT,
        rec_td FLOAT,
        fumbles FLOAT,
        FOREIGN KEY (team_id)
            REFERENCES teams(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
    );`;

    connection.query(`DROP TABLE IF EXISTS players`, function (err, result) {
        if (err) throw err;
        console.log("dropped table players");
    })

    connection.query(`DROP TABLE IF EXISTS teams`, function (err, result) {
        if (err) throw err;
        console.log("dropped table teams");
    })

    connection.query(`DROP TABLE IF EXISTS divisions`, function (err, result) {
        if (err) throw err;
        console.log("dropped table divisions");
    })

    connection.query(divisionsSchema, function (err, result) {
        if (err) throw err;
        console.log("Table divisions created");
    });

    connection.query(teamsSchema, function (err, result) {
        if (err) throw err;
        console.log("Table teams created");
    });

    connection.query(playersSchema, function (err, result) {
        if (err) throw err;
        console.log("Table players created");
    });
}

module.exports = {
    connection,
    open,
    close,
    generateSchemas,
}
