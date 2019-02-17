const connection = require('../db/index').connection;


createTeam = data => {
    var sql = `INSERT INTO team (name, university_name, conference_id) VALUES('${data.name}', '${data.university_name}', '${data.conference_id}')`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        return result.insertId;
        console.log("1 team inserted");
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

