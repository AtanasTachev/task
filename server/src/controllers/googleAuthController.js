const router = require('express').Router();
const googleAuth = require('../services/googleAuthService');

router.get('/' , async(req, res) => {
    let user = req.body;
    console.log(user);
    try {
        let response = await googleAuth(user)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;