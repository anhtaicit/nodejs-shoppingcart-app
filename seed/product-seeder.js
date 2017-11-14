var Product = require('../models/product');
var mongoose = require('mongoose')

mongoose.connect('localhost:27017/shopping');

var products = [
new Product({
    imagePath: 'https://ds1hty5qgiz73.cloudfront.net/wp-content/uploads/2014/04/nodejs.png',
    title: 'Nodejs Course',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    price: 15
}),
new Product({
    imagePath: 'https://ds1hty5qgiz73.cloudfront.net/wp-content/uploads/2014/04/nodejs.png',
    title: 'Nodejs Course 1',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    price: 15
}),
new Product({
    imagePath: 'https://ds1hty5qgiz73.cloudfront.net/wp-content/uploads/2014/04/nodejs.png',
    title: 'Nodejs Course 2',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    price: 15
}),
new Product({
    imagePath: 'https://ds1hty5qgiz73.cloudfront.net/wp-content/uploads/2014/04/nodejs.png',
    title: 'Nodejs Course 3',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    price: 15
})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length) {
            exit();
        }
    });    
}

function exit() {
    mongoose.disconnect();
}