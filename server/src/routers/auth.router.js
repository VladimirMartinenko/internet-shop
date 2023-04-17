const authRouter = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const { checkRefreshToken } = require('../middlewares/token.mw');
const { checkAccessToken } = require('../middlewares/token.mw');

authRouter.post('/register',AuthController.register)
authRouter.post('/login',AuthController.login)
authRouter.post('/refresh',checkRefreshToken,AuthController.refresh)
authRouter.post('/test',checkAccessToken, (req, res, next) => {
  res.send({message: 'autorized users only route'});
})


module.exports = authRouter