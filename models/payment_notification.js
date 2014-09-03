'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , PaymentNotificationSchema

PaymentNotificationSchema = new Schema({
    backerId  : { type: Schema.ObjectId, ref: 'backer'}
  , extraData : { type: String }
});

PaymentNotificationSchema.plugin(modelPlugin);

module.exports = mongoose.model('payment_notification', PaymentNotificationSchema);