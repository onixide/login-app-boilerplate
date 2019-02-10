const mongoose = require("mongoose");
const config = require("config")

module.exports = function () {

    mongoose
        .connect(config.get("db.url"), { useNewUrlParser: true })
        .then(() => console.log("Połączono z bazą danych."))
        .catch(err => {
            console.log(err.errmsg);
            throw new Error(err);
        });
};
