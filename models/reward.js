'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , RewardSchema

RewardSchema = new Schema({
    projectId      : { type: Schema.ObjectId, ref: 'project' }
  , minimumValue   : { type: Number, required: true }
  , maximumBackers : { type: Number }
  , description    : { type: String, required: true }
});

RewardSchema.plugin(modelPlugin);

module.exports = mongoose.model('reward', RewardSchema);