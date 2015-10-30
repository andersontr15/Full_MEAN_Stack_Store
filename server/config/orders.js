var orders = require('./../controllers/orders.js');

module.exports = function(store) {
store.get('/orders', function(req, res){
	console.log("getting orders in orders.js config");
	orders.show(req, res);
});

store.post('/orders', function(req, res){
	console.log("adding order in orders.js in config");
	orders.add(req, res);
})

store.delete('/orders/:id', function(req, res){
	console.log("deleting");
	orders.destroy(req, res)
})

};