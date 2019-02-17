module.exports = resolvers = {
    Query: {
        conferences: async (root, args, context) => {
            return await context.Conference.getConferences();
        }
    }
}
