require('dotenv').config();

var GraphQLServer = require('graphql-yoga').GraphQLServer

const Conference = require('./models/conference');
const Player = require('./models/player');
const Team = require('./models/team');

const db = require('./db');
db.open();

const resolvers = require('./graphql/resolvers');

const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers,
    context: {
        Conference,
        Player,
        Team
    }
})

server.start(() => console.log('Server is running on port 4000'));
