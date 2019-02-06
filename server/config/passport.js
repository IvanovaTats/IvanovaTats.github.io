const passport = require('passport');
const LocalStrategy = require('passport-local');
const userController = require('../controllers/user.controller');

passport.use(new LocalStrategy(
  (username, password, done) => {
    userController.check({ username: username, password: password },
      (err, user) => {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect user.' });
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
