const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
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
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 255,
        trim: true
    },
    created: { 
        type: Date,
        default: Date.now
    }
});

const User = (module.exports = mongoose.model("User", UserSchema));
