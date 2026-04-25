// graphql/resolvers/index.ts
import { blogResolvers } from "./blog.resolver"
import { userResolver } from "./user.resolver"

export const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    ...userResolver.Query,
    ...blogResolvers.Query
  },

  Mutation: {
    ...userResolver.Mutation,
    ...blogResolvers.Mutation
  }
}