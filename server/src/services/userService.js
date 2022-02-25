const User = require('../models/User')

exports.saveUser = async function (...userData) {
    console.log(...userData);
    let user = new Practice({...userData});
    return user.save();
}