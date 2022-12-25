const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();
const authRouter = require('./user.router');

router.use('/auth', userRouter);
module.exports = router;