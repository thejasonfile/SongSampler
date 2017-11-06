const passport = require('passport');
const axios = require('axios');
const request = require('request');

module.exports = app => {
  app.get(
    '/auth/spotify',
    passport.authenticate('spotify', { scope: [] })
  );

  app.get('/auth/spotify/callback',
    passport.authenticate('spotify'),
    (req, res) => {
      console.log(res);
      res.redirect('/search')
    }
  );

  app.get('/auth/current_user', (req, res) => {
    res.send(req.user);
  })
};
