
module.exports = resolvers = {
    Query: {
        conferences: async (root, args, context) => {
            return await context.Conference.getConferences();
        },
        conference: async (root, args, context) => {
            const res = await context.Conference.getConferenceById(args.id);
            return res[0];
        },
        teams: async (root, args, context) => {
            const teams = await context.Team.getTeams();
            for (let i = 0; i < teams.length; i++) {
                const conference = await context.Conference.getConferenceById(teams[i].conference_id);
                teams[i].conference = conference[0];
            }
            return teams;
        },
        team: async (root, args, context) => {
            const team = await context.Team.getTeamById(args.id);
            const conference = await context.Conference.getConferenceById(team[0].conference_id);
            team[0].conference = conference[0];
            return team[0];
        },
        teamPlayers: async (root, args, context) => { 
            const players = await context.Player.getPlayersByTeamId(args.id);
            return players;
        },
        players: async (root, args, context) => {
            // const rowNum = await context.Player.getRowNum();
            // console.log(rowNum);
            const players = await context.Player.getPlayers(args.total, args.page, args.filter);
            for (let i = 0; i < players.length; i++) {
                const team = await context.Team.getTeamById(players[i].team_id);
                const conference = await context.Conference.getConferenceById(team[0].conference_id);
                team[0].conference = conference[0];
                players[i].team = team[0];
                stats = await context.Player.getStatByPlayerId(players[i].id)
                for (let i = 0; i < stats.length; i++) {
                    let a = (stats[i].rush_yds / stats[i].rush_attempt - 3.5) * 2.1;
                    let b = (stats[i].rec_yds / stats[i].catches - 7) * 1.7;
                    let c = (stats[i].rush_td / stats[i].rush_attempt) * 50.3;
                    let d = (stats[i].rec_td / stats[i].catches) * 57.4;
                    let e = (stats[i].fumbles / (stats[i].catches + stats[i].rush_attempt)) * 129.9;
                    let x = .87 * a + .13 * b;
                    let y = .87 * c + .13 * d;
                    let z = e;
                    stats[i].rbi = (Math.max(0, Math.min(x, 3)) + Math.max(0, Math.min(y, 3)) + Math.max(0, Math.min(z, 3)) / 9) * 100;
                }
                players[i].stats = stats
            }

            return players;
        },
        player: async (root, args, context) => {
            const player = await context.Player.getPlayerById(args.id);
            const team = await context.Team.getTeamById(player[0].team_id);
            const conf = await context.Conference.getConferenceById(team[0].conference_id);
            team[0].conference = conf[0];
            player[0].team = team[0];
            stats = await context.Player.getStatByPlayerId(player[0].id)
            for (let i = 0; i < stats.length; i++) {
                let a = (stats[i].rush_yds / stats[i].rush_attempt - 3.5) * 2.1;
                let b = (stats[i].rec_yds / stats[i].catches - 7) * 1.7;
                let c = (stats[i].rush_td / stats[i].rush_attempt) * 50.3;
                let d = (stats[i].rec_td / stats[i].catches) * 57.4;
                let e = (stats[i].fumbles / (stats[i].catches + stats[i].rush_attempt)) * 129.9;
                let x = .87 * a + .13 * b;
                let y = .87 * c + .13 * d;
                let z = e;
                stats[i].rbi = (Math.max(0, Math.min(x, 3)) + Math.max(0, Math.min(y, 3)) + Math.max(0, Math.min(z, 3)) / 9) * 100;
            }
            player[0].stats = stats
            return player[0];
        },
        topPlayers: async (root, args, context) => {
            const players = await context.Player.getTopTenPlayers();
            for (let i = 0; i < players.length; i++) {
                const team = await context.Team.getTeamById(players[i].team_id);
                const conference = await context.Conference.getConferenceById(team[0].conference_id);
                team[0].conference = conference[0];
                players[i].team = team[0];
                stats = await context.Player.getStatByPlayerId(players[i].id)
                for (let i = 0; i < stats.length; i++) {
                    let a = (stats[i].rush_yds / stats[i].rush_attempt - 3.5) * 2.1;
                    let b = (stats[i].rec_yds / stats[i].catches - 7) * 1.7;
                    let c = (stats[i].rush_td / stats[i].rush_attempt) * 50.3;
                    let d = (stats[i].rec_td / stats[i].catches) * 57.4;
                    let e = (stats[i].fumbles / (stats[i].catches + stats[i].rush_attempt)) * 129.9;
                    let x = .87 * a + .13 * b;
                    let y = .87 * c + .13 * d;
                    let z = e;
                    stats[i].rbi = (Math.max(0, Math.min(x, 3)) + Math.max(0, Math.min(y, 3)) + Math.max(0, Math.min(z, 3)) / 9) * 100;
                }
                players[i].stats = stats
            }
            return players;
        }
    }
}
