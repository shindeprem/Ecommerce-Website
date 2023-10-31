const Product = require('./server')
const fs = require('fs');

const productData = JSON.parse(fs.readFileSync('db.json'));

Product.create(productData.products);