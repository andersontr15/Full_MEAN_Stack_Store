var customers = require('./../controllers/customers.js');

module.exports = function(store) {

store.get('/customers', function(req, res) {
  customers.show(req, res);
});

store.post('/customers', function(req, res){
	console.log("adding");
	customers.add(req, res);
})
store.delete('/customers/:id', function(req, res){
	console.log("deleting in routes.js");
	customers.destroy(req, res);
})

};