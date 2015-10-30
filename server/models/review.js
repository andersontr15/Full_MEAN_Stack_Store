var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
	product: String,
	created: Date,
	review: String,
	customer: String,
	img: String
});

mongoose.model('Review', ReviewSchema);