import {GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs:"graphql/shcema.graphql",
    resolvers
});

server.start(() => console.log("GraphQL Server Running"));
