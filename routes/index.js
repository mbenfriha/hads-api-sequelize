'use strict';

const hadController = require('../controllers').had;
const categoryController = require('../controllers').category;
const categoryhadController = require('../controllers').categoryhad;
const userController = require('../controllers').user;

console.log(hadController)

module.exports = (app) => {

    // import passport and passport-jwt modules
    const passport = require('passport');
    const passportJWT = require('passport-jwt');
// ExtractJwt to help extract the token
    let ExtractJwt = passportJWT.ExtractJwt;
// JwtStrategy which is the strategy for the authentication
    let JwtStrategy = passportJWT.Strategy;
    let jwtOptions = {};
    jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = 'wowwow';

    function isLoggedIn(req, res, next) {
        console.log(req.isAuthenticated())
        if(req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/login');
    }


    app.get('/api', (req, res) => res.status(200).send({
        messsage : 'welcome to the had api',
    }));

    /* had */
    app.get('/api/had', hadController.list);

    app.post('/api/had', passport.authenticate('jwt', { session: false }), hadController.create);
    app.delete('/api/had/:had_id', passport.authenticate('jwt', { session: false }), hadController.delete);
    app.put('/api/had/:had_id', passport.authenticate('jwt', { session: false }), hadController.update);

    /* category */
    app.get('/api/category', categoryController.list);
    app.post('/api/addCategory', passport.authenticate('jwt', { session: false }), categoryhadController.create);
    app.delete('/api/deleteCategory/:had_id/:category_id', passport.authenticate('jwt', { session: false }), categoryhadController.delete);
    app.post('/api/category', passport.authenticate('jwt', { session: false }), categoryController.create);

    app.post('/api/login', userController.login)

};
