var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	product: String,
	created: Date,
	img: String,
	description: String,
	quantity: Number
});

mongoose.model('Product', ProductSchema);