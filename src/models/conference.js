const connection = require('../db/index').connection;

const createConference = (data) => {
    var sql = `INSERT INTO conference (name, nick_name, member_number) VALUES ('${data.name}', '${data.member_number}')`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 division inserted");
    });
}

const getConferences = () => {
    return new Promise(function(resolve, reject){
        const sql = `SELECT id, name, member_number FROM conference;`;
        connection.query(sql, function(err, result){
            if (err)
                reject(err);
            resolve(result);
        });
    });
}

const getConferenceById = async (id) => {
    return new Promise(function(resolve, reject){
        const sql = `SELECT * FROM conference WHERE id=${id};`;

        connection.query(sql, function(err, result) {
            if(err)
                reject(err);
            resolve(result);
        })
    })

}

module.exports = {
    createConference,
    getConferenceById,
    getConferences,
}
