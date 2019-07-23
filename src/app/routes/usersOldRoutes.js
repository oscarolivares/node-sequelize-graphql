import db from '../../db/models/index';

export default app => {
  app.get('/users/old', (req, res) => {
    // Find all elements from db and send them to the view
    // This route also get data from user/add redirect

    const addStatus = req.query.addStatus;

    db.User.findAll({ raw: true })
      .then(users => {
        res.render('users/usersOld', {
          users,
          addStatus,
          error: null
        });
      })
      .catch(err => {
        res.status(500).render('users/usersOld', {
          users: null,
          addStatus,
          error: 'db-connection-refused'
        });
      });
  });

  app.post('/users/old/add', (req, res) => {
    // Create an user, if it fails, sends fail state to /users

    db.User.create(req.body)
      .then(result => {
        /* console.log(
          result.get({
            plain: true
          })
        ); */
        res.redirect('/users/old');
      })
      .catch(err => {
        const addStatus = encodeURIComponent('fail');
        res.redirect('/users/old/?addStatus=' + addStatus);
      });
  });

  app.post('/users/old/delete', (req, res) => {
    // Delete an user by id

    db.User.destroy({
      where: {
        id: req.body.id
      }
    })
      .then(result => {
        res.redirect('/users/old');
      })
      .catch(err => {
        const delStatus = encodeURIComponent('fail');
        res.redirect('/users/old/?delStatus=' + delStatus);
      });
  });

  app.post('/users/old/update', (req, res) => {
    // Update an user by id
    
    db.User.update(req.body, {
      where: {
        id: req.body.id
      }
    })
      .then(result => {
        res.redirect('/users/old');
      })
      .catch(err => {
        const updateStatus = encodeURIComponent('fail');
        res.redirect('/users/old/?updateStatus=' + updateStatus);
      });
  });
};
