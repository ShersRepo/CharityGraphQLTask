const resolvers = {

    Query: {
        charities: () => {
            return [
                {
                    id: 1,
                    name: "University",
                    activities: "Oxford trip"
                }
            ]
        }
    }
}

module.exports = resolvers;