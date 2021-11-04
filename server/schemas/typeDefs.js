const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        username: String
        email: String
        password: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        getMe: User
    }

    type Mutation {
        loginUser(username: String!, password: String!): Auth
        registerUser(
            firstName: String!,
            lastName: String!,
            username: String!,
            email: String!,
            password: String!
        ): Auth
    }
`

module.exports = typeDefs