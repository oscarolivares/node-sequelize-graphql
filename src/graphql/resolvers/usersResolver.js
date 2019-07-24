export const resolvers = {
  Query: {
    test1(root, { empty }, ctx) {
      return `${ctx.message}`;
    }
  }
};
