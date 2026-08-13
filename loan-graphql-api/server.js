// deploy api
require('dotenv').config();
const connectDB = require('./config/database');
const typeDefs = require('./graphql/typedef.js');
const resolvers = require('./graphql/resolver.js');
const { ApolloServer } = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone");

async function startServer() {
   await connectDB();
    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });
    // start as standalone server
   const { url } = await startStandaloneServer(
    server,
    {
      listen: {
        port: Number(process.env.PORT) || 4000
      }
    }
  );

    console.log(`🚀 Server ready at ${url}`);

}


startServer();