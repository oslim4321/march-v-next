import gql from "graphql-tag";

export const typeDefs = gql`

    type Query {
        hello: String,
        users: [User],
        user(id: ID!): User
        blogs: [Blog],
        blog(id: ID!): Blog 
    }
    type Mutation {
        createUser(name: String!, email: String!): User
        updateUser(id: ID!, name: String, email: String): User
        deleteUser(id: ID!): User
        createBlog(title: String!, content: String!, author: String!): Blog
        updateBlog(id: ID!, title: String, content: String, author: String, likes: Int): Blog
        deleteBlog(id: ID!): Blog
    }

    type User {
        id: ID,
        name: String,
        email: String
        createdAt: String
        updatedAt: String
    }

    type Blog {
        id: ID,
        title: String,
        content: String
        author: String
        likes: Int
        createdAt: String
        updatedAt: String
    }
`