const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const csrf = require('csurf');

const csrfProtect = csrf();

router.use(csrfProtect);

const title = 'Linkin Store'

/* GET home page. */
router.get('/', (req, res, next) => {
  Product.find((err, product) => {
      res.render('index', { title: title, products: product });
  });
});

router.get('/user/register', (req, res, next) => {
    res.render('user/register', { title: title, csrfToken: req.csrfToken() });
});

router.post('/user/register', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;
