import db from '../../db/models/index';

export const resolvers = {
  Query: {
    test1(root, { empty }, ctx) {
      return `${ctx.message}`;
    },

    User(_, { id }) {
      return db.User.findAll({
        raw: true,
        where: {
          id: id
        }
      })
        .then(users => {
          return users;
        })
        .catch(err => {
          return null;
        });
    },

    Users() {
      return db.User.findAll({ raw: true })
        .then(users => {
          return users;
        })
        .catch(err => {
          return null;
        });
    }
  }
};
