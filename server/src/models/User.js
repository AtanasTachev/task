const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
        validate: /[A-Za-z]+@[A-Za-z]+./i
    },
    familyName: {
        type: String,
        required: true
    },
    givenName: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

userSchema.static('findByGoogleIdl', function(googleId) {
    return this.findOne({googleId});
});

// email: res.profileObj.email,
// familyName: res.profileObj.familyName,
// givenName: res.profileObj.givenName,
// googleId: res.profileObj.googleId,
// imageUrl: res.profileObj.imageUrl,
// name: res.profileObj.name,

const User = mongoose.model('User', userSchema);
module.exports = User;