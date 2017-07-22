const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

const Product = require('../models/product');

const csrfProtect = csrf();

router.use(csrfProtect);

const title = 'Linkin Store';

/* GET home page. */
router.get('/', (req, res, next) => {
  Product.find((err, product) => {
      res.render('index', { title: title, products: product });
  });
});

router.get('/user/register', (req, res, next) => {
    const messages = req.flash('error');
    res.render('user/register', { title: title, csrfToken: req.csrfToken(), messages: messages });
});

router.post('/user/register', passport.authenticate('local.register', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/register',
    failureFlash: true
}));

router.get('/user/profile', (req, res, next) => {
    res.render('user/profile', {title: title});
});

module.exports = router;
