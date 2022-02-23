const router = require('express').Router();

const googleAuthController = require('./controllers/googleAuthController');

router.use('/googleAuth', googleAuthController);

module.exports = router;