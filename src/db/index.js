var mysql = require('mysql');
const Division = require('../models/conference');
const { scraping } = require('./scraping');

var connection = mysql.createConnection({
    host: process.env.MYSQL_SERVER,
    database: process.env.MYSQL_DB_NAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
})

const open = async () => {
    // scraping(0);

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

dropTable = (table_name) => {
    connection.query(`DROP TABLE IF EXISTS ${table_name}`, function (err, result) {
        if (err) throw err;
        console.log(`dropped table ${table_name}`);
    })
}

createTable = (tableSchema, tableName) => {
    connection.query(tableSchema, function (err, result) {
        if (err) throw err;
        console.log(`Table ${tableName} created`);
    });
}

generateSchemas = () => {
    var divisionsSchema = `CREATE TABLE conference (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(64) NOT NULL,
        nick_name VARCHAR(64),
        founded INT,
        member_number INT
        );`;
    var teamsSchema = `CREATE TABLE team (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(64) NOT NULL,
        university_name VARCHAR(64) NULL,
        team_img TEXT NULL,
        conference_id INT,
        FOREIGN KEY (conference_id)
            REFERENCES conference(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
        );`;

    var playersSchema = `CREATE TABLE player (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(64) NOT NULL,
        team_id INT NULL,
        player_img TEXT NULL,
        class TEXT NULL,
        ht_wt TEXT NULL,
        home_town TEXT NULL,
        dob TEXT NULL,
        rush_yds FLOAT NULL,
        rush_attempt INT NULL,
        rec_yds FLOAT NULL,
        catches INT NULL,
        rush_td FLOAT NULL,
        rec_td FLOAT NULL,
        fumbles FLOAT NULL,
        FOREIGN KEY (team_id)
            REFERENCES team(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
    );`;

    dropTable('player');
    dropTable('team');
    dropTable('conference');

    createTable(divisionsSchema, 'conference');
    createTable(teamsSchema, 'team');
    createTable(playersSchema, 'player');
}

module.exports = {
    connection,
    open,
    close,
    generateSchemas,
}
