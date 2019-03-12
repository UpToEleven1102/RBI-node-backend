const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://www.espn.com/college-football/players/_/position/rb';

function scrapingUserInfo(player) {
    return new Promise((resolve, reject)=> {
        rp(player.uri).then(function(html){
            imgs = $('div.PlayerHeader__Image img', html)
            teamInfo = $('ul.PlayerHeader__Team_Info a', html)[0]
            playerBio = $('ul.PlayerHeader__Bio_List div.fw-medium.clr-black', html)
            statTable = $('table.Table2__table-scroller tbody.Table2__tbody', html)[0]
            stats = {}
            if (statTable) {
                stat_2018 = statTable.children[0]
                stat_2017 = statTable.children[1]
                stat_2016 = statTable.children[2]
                stats.s2016 = stat_2016? {
                    rush_yds: stat_2016.children[1]? stat_2016.children[1].children[0].data : '',
                    rush_attempt: stat_2016.children[0]? stat_2016.children[0].children[0].data : '',
                    rec_yds: stat_2016.children[6]? stat_2016.children[6].children[0].data : '',
                    catches: stat_2016.children[5]? stat_2016.children[5].children[0].data : '',
                    rush_td: stat_2016.children[3]? stat_2016.children[3].children[0].data : '',
                    rec_td: stat_2016.children[8]? stat_2016.children[8].children[0].data : '',
                    fumbles: stat_2016.children[10]? stat_2016.children[10].children[0].data : '',
                }: undefined
                stats.s2017 = stat_2017? {
                    rush_yds: stat_2017.children[1]? stat_2017.children[1].children[0].data : '',
                    rush_attempt: stat_2017.children[0]? stat_2017.children[0].children[0].data : '',
                    rec_yds: stat_2017.children[6]? stat_2017.children[6].children[0].data : '',
                    catches: stat_2017.children[5]? stat_2017.children[5].children[0].data : '',
                    rush_td: stat_2017.children[3]? stat_2017.children[3].children[0].data : '',
                    rec_td: stat_2017.children[8]? stat_2017.children[8].children[0].data : '',
                    fumbles: stat_2017.children[10]? stat_2017.children[10].children[0].data : '',
                }: undefined
                stats.s2018 = stat_2018? {
                    rush_yds: stat_2018.children[1]? stat_2018.children[1].children[0].data : '',
                    rush_attempt: stat_2018.children[0]? stat_2018.children[0].children[0].data : '',
                    rec_yds: stat_2018.children[6]? stat_2018.children[6].children[0].data : '',
                    catches: stat_2018.children[5]? stat_2018.children[5].children[0].data : '',
                    rush_td: stat_2018.children[3]? stat_2018.children[3].children[0].data : '',
                    rec_td: stat_2018.children[8]? stat_2018.children[8].children[0].data : '',
                    fumbles: stat_2018.children[10]? stat_2018.children[10].children[0].data : '',
                }: undefined
            }

            teamImg = imgs[0]
            playerImg = imgs[1]
            info = {
                name: player.name,
                university: player.team,
                team_name: teamInfo? teamInfo.children[0].data: '',
                team_logo : teamImg? teamImg.attribs.src: '',
                player_img :playerImg ? playerImg.attribs.src: '',
                playerInfo: {
                    class: playerBio[0].children[0].children[0].data,
                    ht_wt: playerBio[1].children[0].children[0].data,
                    home_town: playerBio[2].children[0].children[0].data
                },
                stats
            }
            // console.log(info)
            resolve(info)
        }).catch(err => reject(err))
    })
}

function scraping(idx) {
    return new Promise( (resolve, reject) => {
        const players = [];
        playerInfo = [];
        rp(url).then(async (html) => {
            console.log($('tbody > tr', html).length);
            // console.log($('tbody > tr', html));

            for (i =0; i< $('tbody > tr', html).length; ++i) {
                player = $('tbody > tr', html)[i]
                if (player.attribs.class.indexOf('player') != -1) {
                    json = {
                        name: player.children[0].children[0].children[0].data,
                        team: player.children[1].children[0].children[0].data,
                        uri: player.children[0].children[0].attribs.href
                    }
                    json.info = await scrapingUserInfo(json)
                }
            }
        
            // if (1121 - idx > 50) {
            //     for (i = idx; i < idx + 50; ++i) {
            //         players.push($('tbody >tr', html)[i]);
            //     }
            // } else {
            //     for (i = idx; i < 1121; ++i) {
            //         players.push($('tbody >tr', html)[i]);
            //     }
            // }

            // players.filter(player => player.attribs.class.indexOf('player') != -1)
            //     .map(player => {
            //         info = {
            //             name: player.children[0].children[0].children[0].data,
            //             team: player.children[1].children[0].children[0].data
            //         }
            //         playerInfo.push(info);
            //     });
            resolve(playerInfo);
        }).catch(function (err) {
            reject(err);
        })
    })
}

module.exports = {
    scraping
}