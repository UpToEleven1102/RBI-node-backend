const connection = require('../db/index').connection;


createTeam = data => {
    var sql = `INSERT INTO divisions (name) VALUES ('${data.name}')`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 team inserted");
    });
}

getTeams = (success) => {
    var sql = `SELECT * FROM teams;`;
    connection.query(sql, function(err, result){
        if(err) throw err;
        success(result);
    })
}

module.exports = {
    createTeam,
    getTeams
}

