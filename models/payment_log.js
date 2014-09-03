'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , PaymentLogSchema

PaymentLogSchema = new Schema({
    backerId      : { type: Schema.ObjectId, ref: 'backer' }
  , status        : { type: Number }
  , amount        : { type: Number }
  , paymentStatus : { type: Number }
  , moipId        : { type: Number }
  , paymentMethod : { type: Number }
  , paymentType   : { type: String }
  , consumerEmail : { type: String }
});

PaymentLogSchema.plugin(modelPlugin);

module.exports = mongoose.model('payment_log', PaymentLogSchema);