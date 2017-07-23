const express = require('express');
const router = express.Router();

const Product = require('../models/product');

const title = 'Linkin Store';

/* GET home page. */
router.get('/', (req, res, next) => {
  Product.find((err, product) => {
      res.render('index', { title, products: product });
  });
});


module.exports = router;
