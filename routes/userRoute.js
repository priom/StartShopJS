const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

const csrfProtect = csrf();

router.use(csrfProtect);

const title = 'Linkin Store';

router.get('/register', (req, res, next) => {
    const messages = req.flash('error');
    res.render('user/register', { title, csrfToken: req.csrfToken(), messages });
});

router.post('/register', passport.authenticate('local.register', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/register',
    failureFlash: true
}));

router.get('/profile', (req, res, next) => {
    res.render('user/profile', {title});
});

router.get('/login', (req, res, next) => {
    const messages = req.flash('error');
    res.render('user/login', { title, csrfToken: req.csrfToken(), messages });
});

router.post('/login', passport.authenticate('local.login', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/login',
    failureFlash: true
}));

module.exports = router;
