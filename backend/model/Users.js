const mongoose = require('mongoose');
//const insurance = require('./Insurance')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: (password) =>
            bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
})
module.exports.UserModel = mongoose.model('user', User);
module.exports.UserSchema = User;