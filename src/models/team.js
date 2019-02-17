const connection = require('../db/index').connection;


createTeam = data => {
    var sql = `INSERT INTO team (name, university_name, conference_id) VALUES('${data.name}', '${data.university_name}', '${data.conference_id}')`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        return result.insertId;
        console.log("1 team inserted");
    });
}

getTeams = (success) => {
    var sql = `SELECT * FROM team;`;
    connection.query(sql, function(err, result){
        if(err) throw err;
        success(result);
    })
}

module.exports = {
    createTeam,
    getTeams
}

