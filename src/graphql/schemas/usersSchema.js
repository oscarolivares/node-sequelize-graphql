import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/usersResolver';

const typeDefs = `
  type Query {
    test1: String
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
