const { ApolloServer } = require('apollo-server');
const Schema = require('./schema');
const Resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs: Schema, resolvers: Resolvers });

server.listen();