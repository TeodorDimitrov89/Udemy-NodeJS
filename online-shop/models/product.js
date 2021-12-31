const fs = require('fs');

const path = require('path');
const p = path.join(path.dirname(require.main.filename),'data', 'products.json');
const getProductsFromFile = (cb) => {
  fs.readFile(p, (error, fileContent) => {
    if(error) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
}

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.floor(Math.random() * 100);
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }

  static fetchAll (cb) {
    getProductsFromFile(cb)
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find(product => product.id.toString() === id);
      cb(product);
    });
  }
}