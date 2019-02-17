const connection = require('../db/index').connection;

const createConference = (data) => {
    var sql = `INSERT INTO conference (name, member_number) VALUES ('${data.name}', '${data.member_number}')`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 division inserted");
    });
}

const getConferences = (success) => {
    var sql = `SELECT id, name, member_number FROM conference;`;
    connection.query(sql, function(err, result){
        if(err) throw err;
        success(result);
    })
}

const getConferenceById = (id) => {
    var sql = `SELECT id, name FROM conference WHERE id=${id};`;

    connection.query(sql, function(err, result) {
        if(err) throw err;
        console.log(result);
    })
}

module.exports = {
    createConference,
    getConferenceById,
    getConferences,
}
