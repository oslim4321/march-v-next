// graphql/typeDefs/blog.type.ts
import gql from "graphql-tag"

export const blogType = gql`
  type Blog {
    id: ID
    title: String
    content: String
    author: String
    likes: Int
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    blogs: [Blog]
    blog(id: ID!): Blog
  }

  extend type Mutation {
    createBlog(title: String!, content: String!, author: String!): Blog
    updateBlog(
      id: ID!
      title: String
      content: String
      author: String
      likes: Int
    ): Blog
    deleteBlog(id: ID!): Blog
  }
`