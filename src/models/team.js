const connection = require('../db/index').connection;


createTeam = data => {
    var sql = `INSERT INTO team (name, university_name, team_img, conference_id) VALUES('${data.name}', '${data.university_name}', '${data.team_img}', '${data.conference_id}')`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 team inserted");
        return result.insertId;
    });
}

getTeams = async () => {
    return new Promise(function(resolve, reject){
        const sql = `SELECT * FROM team;`;
        connection.query(sql, function(err, result){
            if(err)
                reject(err);
            resolve(result);
        })
    });
}

getTeamById = (id) => new Promise(function(resolve, reject){
   const sql = `SELECT * FROM team WHERE id=${id};`
    connection.query(sql, function(err, result) {
        if (err)
            reject(err);
        resolve(result);
    })
});

module.exports = {
    createTeam,
    getTeams,
    getTeamById
}

