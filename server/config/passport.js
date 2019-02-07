const passport = require('passport');
const LocalStrategy = require('passport-local');
const userController = require('../controllers/user.controller');
const User = require('../models/user.model');

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username: req.username, password: req.password },
      (err, user) => {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect user.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userController.findById(id, (err, user) => {
    done(err, user);
  });
});
