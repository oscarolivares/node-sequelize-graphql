import path from 'path';
import express from 'express';
import app from './config/server';
import bodyParser from 'body-parser';
import homeRoutes from './app/routes/homeRoutes';
import userRoutes from './app/routes/usersRoutes';

app.use(bodyParser.urlencoded({ extended: false }));

homeRoutes(app);
userRoutes(app);

app.use(express.static(path.join(__dirname, '/public')));

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'));
});
