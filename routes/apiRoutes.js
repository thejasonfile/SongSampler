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
  });

  app.post('/api/spotify/artist', async (req, res) => {
    const access_token = req.user.spotifyToken;
    const artistName = req.body.artistName;

    //get artist ID
    var url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
    var spotifyResponse = await axios.get(url, { headers: { Authorization: 'Bearer ' + access_token }});
    const artistId = spotifyResponse.data.artists.items[0].id;

    //get artist's top top tracks
    var url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`;
    var spotifyResponse = await axios.get(url, { headers: { Authorization: 'Bearer ' + access_token }});
    const artistTracks = spotifyResponse.data.tracks;

    //return data to front end
    res.send(artistTracks);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
