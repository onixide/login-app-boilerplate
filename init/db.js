const mongoose = require("mongoose");

module.exports = function () {
    const dbUri = "mongodb://admin:zipera1@ds123224.mlab.com:23224/newyearnewme";

    mongoose
        .connect(dbUri, { useNewUrlParser: true })
        .then(() => console.log("Połączono z bazą danych."))
        .catch(err => {
            console.log(err.errmsg);
            throw new Error(err);
        });
};
