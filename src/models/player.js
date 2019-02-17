const connection = require('../db/index').connection;


createPlayer = data => {
    var sql = `INSERT INTO player 
    (name, team_id, rush_yds, rush_attempt, rec_yds, catches, rush_td, rec_td, fumbles) 
    VALUES('${data.name}', '${data.team_id}', '${data.rush_yds}', '${data.rush_attempt}', '${data.rec_yds}', '${data.catches}', '${data.rush_td}', '${data.rec_td}', '${data.fumbles}');
    `;
    connection.query(sql, function(err, result){
        if (err) throw err;
        console.log(result.insertId + " player");
    })
};

getPlayers = () => new Promise(function(resolve, reject){
    const sql = `SELECT * FROM player;`;
    connection.query(sql, function(err, result){
        if(err)
            reject(err);
        resolve(result);
    });
});

getPlayerById = id => new Promise(function(resolve, reject){
    const sql = `SELECT * FROM player WHERE id=${id};`;
    connection.query(sql, function(err, result){
       if(err)
           reject(err);
       resolve(result);
    });
});

module.exports = {
    createPlayer,
    getPlayers,
    getPlayerById
}

