const router = require('express').Router();
const { googleAuth } = require('../services/googleAuthService');

router.get('/googleAuth', async (req, res) => {
    let { userId, email, fullName, photoUrl } = req.body;
    try {
        let response = await googleAuth(userId, email, fullName, photoUrl);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;