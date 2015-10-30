var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	customer: String,
	created: Date,
	quantity: Number,
	item: String
});

mongoose.model('Order', OrderSchema);