import db from '../../db/models/index';

export const resolvers = {
  Query: {
    test1(root, { empty }, ctx) {
      return `${ctx.message}`;
    },

    async User(_, { id }) {
      return await db.User.findAll({
        raw: true,
        where: {
          id: id
        }
      })
        .then(users => {
          return users;
        })
        .catch(err => {
          return 'none';
        });
    },

    async Users() {
      return await db.User.findAll({ raw: true })
        .then(users => {
          return users;
        })
        .catch(err => {
          return 'none';
        });
    }
  }
};
