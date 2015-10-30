var mongoose = require('mongoose');
var fs = require('fs');

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/OrdersCustomers';

mongoose.connect(uristring, function(err, res) {
  if(err) {
    console.log('ERROR connecting to: ' + uristring + '.' + err);
  } else {
    console.log('Succeeded connected to: ' + uristring);
  }
});


var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})