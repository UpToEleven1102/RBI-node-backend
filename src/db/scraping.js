const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://www.espn.com/college-football/players/_/position/rb';

function scraping(idx) {
    return new Promise((resolve, reject) => {
        const players = [];
        playerInfo = [];
        rp(url).then(function (html) {
            console.log($('tbody > tr', html).length);
            // console.log($('tbody > tr', html));
            if (1121 - idx > 50) {
                for (i = idx; i < idx + 50; ++i) {
                    players.push($('tbody >tr', html)[i]);
                }
            } else {
                for (i = idx; i < 1121; ++i) {
                    players.push($('tbody >tr', html)[i]);
                }
            }

            players.filter(player => player.attribs.class.indexOf('player') != -1)
                .map(player => {
                    info = {
                        name: player.children[0].children[0].children[0].data,
                        team: player.children[1].children[0].children[0].data
                    }
                    playerInfo.push(info);
                });
            resolve(playerInfo);
        }).catch(function (err) {
            reject(err);
        })
    })
}

module.exports = {
    scraping
}