const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const keys = require('./keys');

require('./models/User');
require('./services/passport');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
  res.send('<a href="/auth/spotify">Log in with Spotify</a>');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
