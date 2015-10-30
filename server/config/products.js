var products = require('./../controllers/products.js');

module.exports = function(store) {
store.get('/products', function(req, res){
	products.show(req, res);
});

store.post('/products', function(req, res){
	products.add(req, res);
})

store.delete('/products/:id', function(req, res){
	products.destroy(req, res);
})

};
