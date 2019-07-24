import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/usersResolver';

const typeDefs = `
  type Query {
    test1: String
    User(id: Int!): [User]
    Users: [User]
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
