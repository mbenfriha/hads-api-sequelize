'use strict';
const user = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jswSecret = require('../config/jwt')



module.exports = {
    login: (req, res, next) => {

        // import passport and passport-jwt modules
        const passport = require('passport');
        const passportJWT = require('passport-jwt');
// ExtractJwt to help extract the token
        let ExtractJwt = passportJWT.ExtractJwt;
// JwtStrategy which is the strategy for the authentication
        let JwtStrategy = passportJWT.Strategy;
        let jwtOptions = {};
        jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
        jwtOptions.secretOrKey = jswSecret.secret;

        console.log(req.body.password);
        return user
            .findOne({
                name: req.body.name
            })
            .then (user => {
                if(bcrypt.compareSync(req.body.password, user.password)) {
                    // from now on we'll identify the user by the id and the id is the
                    // only personalized value that goes into our token
                    let payload = { name: user.name , id: user.id};
                    let token = jwt.sign(payload, jwtOptions.secretOrKey);
                    res.json({ msg: 'ok', token: token });
                } else {
                    res.status(401).json({ msg: 'Password is incorrect' });
                }
            })
            .then (error => res.status(401).json({ message: 'No such user found' }))
    },
};