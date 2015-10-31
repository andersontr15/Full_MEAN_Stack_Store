var express = require('express');
var path = require('path');
var store = express();
var bodyParser = require('body-parser');
var port = Number(process.env.PORT || 8000);
store.use(express.static(path.join(__dirname, './client')));
store.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/customers.js')(store);
require('./server/config/orders.js')(store);
require('./server/config/products.js')(store);
require('./server/config/reviews.js')(store);

store.listen(port, function(){
	console.log("Mini store on port " + port);
});