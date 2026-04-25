// graphql/typeDefs/index.ts
import gql from "graphql-tag"
import { userType } from "./user.type"
import { blogType } from "./blog.type"

const baseType = gql`
  type Query {
    hello: String
  }

  type Mutation
`

export const typeDefs = [baseType, userType, blogType]