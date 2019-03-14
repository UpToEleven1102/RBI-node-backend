const connection = require('../db/index').connection;


createStat = data => {
    return new Promise((resolve, reject) => {
        rush_yds = data.rush_yds.length > 0 ? Number(data.rush_yds) : null
        rush_attempt = data.rush_attempt && data.rush_attempt.length > 0 ? Number(data.rush_attempt) : null
        rec_yds = data.rec_yds.length > 0 ? Number(data.rec_yds) : null
        catches = data.catches.length > 0 ? Number(data.catches) : null
        rush_td = data.rush_td.length > 0 ? Number(data.rush_td) : null
        rec_td = data.rec_td.length > 0 ? Number(data.rec_td) : null
        fumbles = data.fumbles.length > 0 ? Number(data.fumbles) : null

        var sql = `INSERT INTO stat 
    (player_id, year, rush_yds, rush_attempt, rec_yds, catches, rush_td, rec_td, fumbles) 
    VALUES(${data.player_id}, ${data.year}, ${rush_yds}, ${rush_attempt}, ${rec_yds}, ${catches}, ${rush_td}, ${rec_td}, ${fumbles});
    `
        connection.query(sql, function (err, result) {
            console.log(err)
            if (err) reject(err);
            else {
                resolve(result)
            console.log(`stat ${data.year} created`)
            }
        })
    })
};

getStatByPlayerId = player_id => {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * FROM stat WHERE player_id=${player_id};`

        connection.query(sql, function (err, result) {
            if (err) reject(err);
            resolve(result)
        })
    })
}

module.exports = {
    createStat,
    getStatByPlayerId
}