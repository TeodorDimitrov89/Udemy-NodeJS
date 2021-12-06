const express = require('express');
const router = express.Router();

router.get('/add-products', (req, res, next) => {
  const form = `<form method="POST" action="/product">
  <input type="text" name="title" />
  <button type="submit">Add Product</button>
  </form>`;
  res.send(form)
});

router.post('/product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
});

module.exports = router;