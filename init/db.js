const mongoose = require("mongoose");

module.exports = function () {
    const dbString = "mongodb://admin:zipera1@ds123224.mlab.com:23224/newyearnewme";

    // const mongodb = mongoose.connect(dbString, {useNewUrlParser: true})
    // .then(
    //     () => { console.log("rdy");/** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    //     // err => { console.log("err"); 
    //     // throw new Error(err) /** handle initial connection error */ 
    // // }
    // )
    // .catch((err) => { 
    //     console.log(err.errmsg);
    //     throw new Error(err)
    // })


    mongoose.connect(dbString, { useNewUrlParser: true }, function (error, callback) {
        if (error) {
            throw new Error("Nie można połączyć się z bazą danych.");
        } else {
            console.log("Połączono z bazą danych.");
        }
    });

}