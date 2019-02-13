const connection = require('../db/index').connection;


createPlayer = data => {

}

getPlayers = (success) => {
    var sql = `SELECT * FROM players;`;
    connection.query(sql, function(err, result){
        if(err) throw err;
        success(result);
    })
}

module.exports = {
    createPlayer,
    getPlayers
}

