import { resolvers } from "@/graphql/resolvers"
import { typeDefs } from "@/graphql/typeDefs"
import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"


const server = new ApolloServer({
    typeDefs,
    resolvers,

})

const handler = startServerAndCreateNextHandler(server)

export { handler as GET, handler as POST }



