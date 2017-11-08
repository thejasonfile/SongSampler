const passport = require('passport');
const axios = require('axios');
const request = require('request');

module.exports = app => {
  app.get(
    '/auth/spotify',
    passport.authenticate('spotify', { scope: [] })
  );

  app.get('/auth/spotify/callback',
    passport.authenticate('spotify', {
      successRedirect: '/search',
      failureRedirect: '/'
    })
  );

  app.get('/auth/current_user', (req, res) => {
    res.send(req.user);
  });
};
