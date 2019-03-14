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
        home_town = data.Hometown ? `'${data.Hometown}'` : null
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
        resolve(result);
    });
});

getPlayerById = id => new Promise(function (resolve, reject) {
    const sql = `SELECT * FROM player WHERE id=${id};`;
    connection.query(sql, function (err, result) {
        if (err)
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

