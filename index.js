const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('client/public'));

require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI, { useMongoClient: true });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
