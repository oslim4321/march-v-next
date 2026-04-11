import gql from "graphql-tag";

export const typeDefs = gql`

    type Query {
        hello: String,
        users: [User],
        user(id: ID!): User
        blogs: [Blog],
        blog(id: ID!): Blog 
    }

    type User {
        id: ID,
        name: String,
        email: String
    }

    type Blog {
        id: ID,
        title: String,
        content: String
    }
`