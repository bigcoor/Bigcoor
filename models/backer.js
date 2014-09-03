'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , BackerSchema

BackerSchema = new Schema({
    projectId            : { type: Schema.ObjectId, ref: 'project', required: true }
  , userId               : { type: Schema.ObjectId, ref: 'user', required: true }
  , rewardId             : { type: Schema.ObjectId, ref: 'reward', required: true }
  , value                : { type: Number, required: true }
  , confirmed            : { type: Boolean, required: true }
  , confirmedAt          : { type: Date }
  , anonymous            : { type: Boolean, default: false }
  , key                  : { type: String }
  , requestedRefund      : { type: Boolean, default: false }
  , refunded             : { type: Boolean, default: false }
  , credits              : { type: Boolean, default: false }
  , notifiedFinish       : { type: Boolean, default: false }
  , paymentMethod        : { type: String }
  , paymentToken         : { type: String }
  , paymentId            : { type: Schema.ObjectId, ref: 'payment' }
  , payerName            : { type: String }
  , payerEmail           : { type: String }
  , payerDocument        : { type: String }
  , addressStreet        : { type: String }
  , addressNumber        : { type: String }
  , addressComplement    : { type: String }
  , addressNeighbourhood : { type: String }
  , addressZipCode       : { type: String }
  , addressCity          : { type: String }
  , addressState         : { type: String }
  , addressPhoneNumber   : { type: String }
  , paymentChoice        : { type: String }
  , paymentServiceFee    : { type: Number }
});

BackerSchema.plugin(modelPlugin);

module.exports = mongoose.model('backer', BackerSchema);