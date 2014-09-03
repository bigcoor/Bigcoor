'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , RewardRangeSchema

RewardRangeSchema = new Schema({
    name  : { type: String, required: true }
  , lower : { type: Number }
  , upper : { type: Number }
});

RewardRangeSchema.plugin(modelPlugin);

module.exports = mongoose.model('reward_range', RewardRangeSchema);