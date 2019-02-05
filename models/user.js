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

const User = module.exports = mongoose.model("User", UserSchema);

// module.exports.getAllUsers = function (callback) {
//  setTimeout(() => {
//      User.find({"login" : "login1"}, callback);
//  },2000)

// }
https://stackoverflow.com/questions/24928846/get-return-value-from-settimeout
async function x() {
    setTimeout(function() {
               return await User.find({"login" : "login1"});
            });
}


module.exports.getAllUsers = async function () {
    
    // let promise = new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //         User.find({"login" : "login1"});
    //     });
    //   });
    //   return promise;
    
   
        const result = await x();
        console.log(result); // --> 'done!';
        return result;


    }

