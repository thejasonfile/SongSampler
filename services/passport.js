const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new SpotifyStrategy(
  {
    clientID: keys.spotifyClientID,
    clientSecret: keys.spotifySecret,
    callbackURL: "/auth/spotify/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ spotifyId: profile.id });

    if (existingUser) {
      console.log('token', accessToken);
      return done(null, existingUser);
    }

    console.log('token', accessToken);
    const user = await new User({ spotifyId: profile.id }).save();
    done(null, user);
  }
));
