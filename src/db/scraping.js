const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://www.espn.com/college-football/players/_/position/rb';

function scraping() {
    return new Promise((resolve, reject) => {
        const players = [];
        rp(url).then(function(html){
        console.log($('tbody > tr', html).length);
        // console.log($('tbody > tr', html));
        for(i = 0; i< 100; ++i) {
            players.push($('tbody >tr',html)[i]);
        }

        childPlayers = players.filter(player => player.attribs.class.indexOf('player') != -1)
        .map(player=> player.children[0].children[0].children[0].data);
        console.log(childPlayers);
        resolve(childPlayers);
    }).catch(function(err) {
        reject(err);
    })
    })
}

module.exports = {
    scraping
}