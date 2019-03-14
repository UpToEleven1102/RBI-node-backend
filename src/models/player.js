const connection = require('../db/index').connection;


// name VARCHAR(64) NOT NULL,
//         team_id INT NULL,
//         player_img TEXT NULL,
//         class TEXT NULL,
//         ht_wt TEXT NULL,
//         home_town TEXT NULL,
//         dob TEXT NULL,

createPlayer = data => {
    return new Promise((resolve, reject) => {
        home_town = data.Hometown ? `'${data.Hometown.replace(`'`, `''`)}'` : null
        ht_wt = data.HT_WT ? `'${data.HT_WT.replace(`'`, `''`)}'` : null
        dob = data.DOB ? `'${data.DOB}'` : null
        p_class = data.Class ? `'${data.Class}'` : null

        var sql = `INSERT INTO player 
    (name, team_id, player_img, class, ht_wt, home_town, dob) 
    VALUES('${data.name.replace(`'`, `''`)}', ${data.team_id}, '${data.player_img}', ${p_class}, ${ht_wt}, ${home_town}, ${dob});
    `;
        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                console.log(result.insertId + " player");
                resolve(result.insertId);
            }
        })
    })
};

getRowNum = () => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT COUNT(*) as rows FROM player;`;

        connection.query(sql, function (err, result) {
            if (err)
                reject(err);
            else
                resolve(result[0]);
        })
    });
}

getPlayers = (total = 10, page = 1, filter = '') => new Promise(function (resolve, reject) {
    const begin = (page - 1) * total;

    const sql = `SELECT * FROM player WHERE INSTR(name,'${filter}') > 0 LIMIT ${begin},${total};`;
    connection.query(sql, function (err, result) {
        if (err)
            reject(err);
        else
            resolve(result);
    });
});

getPlayerById = id => new Promise(function (resolve, reject) {
    const sql = `SELECT * FROM player WHERE id=${id};`;
    connection.query(sql, function (err, result) {
        if (err)
            reject(err);
        else
            resolve(result);
    });
});

createStat = data => new Promise(function (resolve, reject) {
    rush_yds = data.rush_yds && data.rush_yds.length > 0 ? Number(data.rush_yds) : null
    rush_attempt = data.rush_attempt && data.rush_attempt.length > 0 ? Number(data.rush_attempt) : null
    rec_yds = data.rec_yds && data.rec_yds.length > 0 ? Number(data.rec_yds) : null
    catches = data.catches && data.catches.length > 0 ? Number(data.catches) : null
    rush_td = data.rush_td && data.rush_td.length > 0 ? Number(data.rush_td) : null
    rec_td = data.rec_td && data.rec_td.length > 0 ? Number(data.rec_td) : null
    fumbles = data.fumbles && data.fumbles.length > 0 ? Number(data.fumbles) : null

    var sql = `INSERT INTO stat 
        (player_id, year, rush_yds, rush_attempt, rec_yds, catches, rush_td, rec_td, fumbles) 
        VALUES(${data.player_id}, ${data.year}, ${rush_yds}, ${rush_attempt}, ${rec_yds}, ${catches}, ${rush_td}, ${rec_td}, ${fumbles});`;

    connection.query(sql, function (err, result) {
        if (err) reject(err);
        else {
            resolve(result)
            console.log(`stat ${data.year} created`)
        }
    })
})

getStatByPlayerId = player_id => {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * FROM stat WHERE player_id=${player_id};`

        connection.query(sql, function (err, result) {
            if (err) reject(err);
            console.log(result);
                resolve(result)
        })
    })
}

module.exports = {
    createPlayer,
    getPlayers,
    getRowNum,
    getPlayerById,
    createStat,
    getStatByPlayerId
}

