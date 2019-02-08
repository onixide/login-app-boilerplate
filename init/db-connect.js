const mongoose = require("mongoose");
const db = require("../config/db")

module.exports = function () {

    mongoose
        .connect(db.database, { useNewUrlParser: true })
        .then(() => console.log("Połączono z bazą danych."))
        .catch(err => {
            console.log(err.errmsg);
            throw new Error(err);
        });
};
