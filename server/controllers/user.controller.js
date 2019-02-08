const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user.model');

mongoose.connect('mongodb://localhost:27017/newsAPI', { useNewUrlParser: true });

exports.register = (req, res) => {
  const user = new User(req.body);

  user.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json('registered');
  });
};
exports.login = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400);
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign({ username: user.username, password: user.password }, 'jwt_secret');
      return res.json({ user, token });
    });
  })(req, res);
};