import { request } from 'graphql-request';

/* export default app => {
  app.get('/request', (req, res) => {
    const query = `{
      Users {
        firstName,
        lastName,
        email
      }
    }`;

    request('http://localhost:3000/graphql', query)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).send('Server error');
      });
  });
}; */

export default app => {
  app.get('/request', async (req, res) => {
    const query = `{
      Users {
        firstName,
        lastName,
        email
      }
    }`;

    try {
      const data = await request('http://localhost:3000/graphql', query);
      res.status(200).json(data);
    } catch (err) {
      res.send(err);
    }
  });
};
