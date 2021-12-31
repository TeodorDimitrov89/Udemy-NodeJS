const Product = require('../models/product');


exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
   });
}


exports.getProducts = (req, res, next) => {
 Product.fetchAll((products) => {
  res.render('shop/product-list', {
    prods: products,
    pageTitle: 'All Products',
    path: '/products',
  });
 });
}

exports.getProduct = (req, res, next) => {
  const prodId = req.params.id;
  Product.findById(prodId, (product) => {
    res.render('shop/product-detail', {
      pageTitle: product.title,
      path: '/products',
      product: product
    });
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart'
  });
}

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;

  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart'
  });
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Orders',
    path: '/orders'
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('/shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout'
  });
}
