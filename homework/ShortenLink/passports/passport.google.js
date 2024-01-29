const GoogleStrategy = require("passport-google").Strategy;
module.exports = new GoogleStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  },
  function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    return cb(null, {});
  }
);
