'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , TotalBackedRangeSchema

TotalBackedRangeSchema = new Schema({
    name  : { type: String, required: true }
  , lower : { type: Number }
  , upper : { type: Number }
});

TotalBackedRangeSchema.plugin(modelPlugin);

module.exports = mongoose.model('total_backed_range', TotalBackedRangeSchema);