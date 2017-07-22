const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const csrf = require('csurf');

const csrfProtect = csrf();

router.use(csrfProtect);

/* GET home page. */
router.get('/', (req, res, next) => {
  Product.find((err, product) => {
      res.render('index', { title: 'StartShopJS', products: product });
  });
});

router.get('/user/register', (req, res, next) => {
    res.render('user/register', { csrfToken: req.csrfToken() });
});

module.exports = router;
