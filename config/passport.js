require('dotenv').config();

//authentication strategy with a json webtoken
//authenticate endpoints using a token
const JwtStrategy = require('passport-jwt');
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken;
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, (jwt_payload, done) => {
            //find user from id in payload
            //if user, check if in db
        })
    );
};
