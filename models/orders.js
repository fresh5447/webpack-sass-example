var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  customer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  total: Number
});

module.exports = mongoose.model('Order', OrderSchema);