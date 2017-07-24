const express = require('express');
const router = express.Router();

const Product = require('../models/product');

const title = 'Linkin Store';

/* GET home page. */
router.get('/', (req, res, next) => {
  Product.find().sort({year: 1}).exec((err, products) => {
      res.render('index', { title, products });
  });
});

module.exports = router;
