const connection = require('../db/index').connection;


createPlayer = data => {
    home_town = data.playerInfo.Hometown? `'${data.playerInfo.Hometown}'` : null
    ht_wt = data.playerInfo.HT/WT? `'${data.playerInfo.HT/WT}'` : null
    dob = data.playerInfo.DOB? `'${data.playerInfo.DOB}'` : null
    p_class = data.playerInfo.Class? `'${data.playerInfo.Class}'` : null

   


    var sql = `INSERT INTO player 
    (name, team_id, player_img, class, ht_wt, home_town, dob, rush_yds, rush_attempt, rec_yds, catches, rush_td, rec_td, fumbles) 
    VALUES('${data.name}', '${data.team_id}', '${data.player_img}', ${p_class}, ${ht_wt}, ${home_town}, ${dob}, '${data.team_id}', '${data.rush_yds}', '${data.rush_attempt}', '${data.rec_yds}', '${data.catches}', '${data.rush_td}', '${data.rec_td}', '${data.fumbles}');
    `;
    connection.query(sql, function(err, result){
        if (err) throw err;
        console.log(result.insertId + " player");
    })
};

getRowNum = () => {
    return new Promise(function(resolve, reject){
       const sql = `SELECT COUNT(*) as rows FROM player;`;

       connection.query(sql, function (err, result){
           if(err)
               reject(err);
           resolve(result[0]);
       })
    });
}

getPlayers = (total = 10, page = 1, filter = '') => new Promise(function(resolve, reject){
    const begin = (page-1)*total;

    const sql = `SELECT * FROM player WHERE INSTR(name,'${filter}') > 0 LIMIT ${begin},${total};`;
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
    getRowNum,
    getPlayerById,
}

