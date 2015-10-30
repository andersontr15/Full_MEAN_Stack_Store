var reviews = require('./../controllers/reviews.js');

module.exports = function(store) {
store.get('/reviews', function(req, res){
	reviews.show(req, res);
});

store.post('/reviews', function(req, res){
	console.log("adding review in routes.js");
	reviews.add(req, res);
})

store.delete('/reviews/:id', function(req, res){
	reviews.destroy(req, res);
})

};