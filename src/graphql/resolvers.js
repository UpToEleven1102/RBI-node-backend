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
            for (let i =0; i< teams.length; i++) {
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
        players: async (root, args, context) => {
            const players = await context.Player.getPlayers();
            for (let i=0; i< players.length; i++) {
                const team =await context.Team.getTeamById(players[i].team_id);
                const conference = await context.Conference.getConferenceById(team[0].conference_id);
                team[0].conference = conference[0];
                players[i].team = team[0];
            }

            return players;
        },
        player: async (root, args, context) => {
            const player = await context.Player.getPlayerById(args.id);
            const team = await context.Team.getTeamById(player[0].team_id);
            const conf = await context.Conference.getConferenceById(team[0].conference_id);
            team[0].conference = conf[0];
            player[0].team = team[0];
            return player[0];
        }
    }
}
