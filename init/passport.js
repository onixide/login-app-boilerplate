const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const db = require("../config/db")

module.exports = function(passport){

  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = db.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(JSON.stringify(jwt_payload) + "XXX");
    console.log(jwt_payload.data._id);
    User.findOne({_id : jwt_payload.data._id}, (err, user) => {
      if(err){
        return done(err, false);
      }

      if(user){
        console.log(user);
        return done(null, user);

      } else {
        return done(null, false);
      }
    });
  }));
}