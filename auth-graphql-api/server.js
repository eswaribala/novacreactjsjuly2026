require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone");
const {connectToDatabase} = require("./config/database.js");
const typeDefs = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolvers.js");

async function startServer() {
  try {
    // Connect to the database
    await connectToDatabase();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    const { url } = await startStandaloneServer(
    server,
    {
      listen: {
        port: Number(process.env.PORT) || 4000
      }
    }
  );
  console.log(`Server running at: ${url}`);
}

  catch (error) {
    console.error("Error starting the server:", error);
  }

}

startServer();
