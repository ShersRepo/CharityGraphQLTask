const { gql } = require('apollo-server');

const schema = `

    type Charity {
        id: Int,
        name: String,
        activities: String 
    }

    type Query {
        charities: [Charity]
    }
    `

    module.exports = schema;