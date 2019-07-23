import db from '../../db/models/index';

export default app => {
  app.get('/users', (req, res) => {
    res.send('Users ok');
  });
};
