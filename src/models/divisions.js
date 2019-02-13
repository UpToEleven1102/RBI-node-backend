const connection = require('../db/index').connection;

const createDivision = (data) => {
    var sql = `INSERT INTO divisions (name) VALUES ('${data.name}')`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 division inserted");
    });
}

const getDivisions = (success) => {
    var sql = `SELECT id, name FROM divisions;`;
    connection.query(sql, function(err, result){
        if(err) throw err;
        success(result);
    })
}

const getDivisionById = (id) => {
    var sql = `SELECT id, name FROM divisions WHERE id=${id};`;

    connection.query(sql, function(err, result) {
        if(err) throw err;
        console.log(result);
    })
}

module.exports = {
    createDivision,
    getDivisions,
    getDivisionById,
}
