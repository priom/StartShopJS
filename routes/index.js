const express = require('express');
const router = express.Router();
const Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err, product) => {
      res.render('index', { title: 'StartShopJS', products: product });
  });
});

module.exports = router;
