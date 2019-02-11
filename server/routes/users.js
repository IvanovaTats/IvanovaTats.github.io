const express = require('express');
const userController = require('../controllers/user.controller');

const userRouter = express.Router();

function router() {
  userRouter.route('/login')
    .post((req, res) => {
      userController.login(req, res);
    });
    userRouter.route('/register')
    .post((req, res) => {
      userController.register(req, res);
    });
  return userRouter;
}

module.exports = router;
