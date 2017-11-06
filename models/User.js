const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  spotifyId: String,
  spotifyToken: String
});

mongoose.model('users', userSchema);
