const mongoose = require("mongoose");
const config = require("config")

module.exports = function () {

    const db = `mongodb://${config.get("db.login")}:${config.get("db.password")}@ds123224.mlab.com:23224/newyearnewme`
   
    mongoose
        .connect(db, { useNewUrlParser: true })
        .then(() => console.log("Połączono z bazą danych."))
        .catch(err => {
            console.log(err.errmsg);
            throw new Error(err);
        });
};
