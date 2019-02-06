const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 255,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 1024,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const User = (module.exports = mongoose.model("User", UserSchema));

module.exports.getAllUsers = function (callback) {
    setTimeout(() => {
        User.find({}, callback);
    }, 2000);
};

module.exports.getUser = function (email, callback) {
    setTimeout(() => {
        User.findOne(
            {
                email: email
            },
            callback
        );
    }, 2000);
};

module.exports.deleteUser = function (id, callback) {
    setTimeout(() => {
        User.findByIdAndDelete(id, callback)
    }, 2000);
};

// 5c5984cfd4244f0ef04c452a
module.exports.updateUser = function (id, updated, callback) {
    setTimeout(() => {
        User.findByIdAndUpdate(id, updated, {new : true}, callback);
    }, 2000);
};
