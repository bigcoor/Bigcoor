'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , StateSchema

StateSchema = new Schema({
    name    : { type: String, required: true }
  , acronym : { type: String, required: true }
});

StateSchema.plugin(modelPlugin);

module.exports = mongoose.model('state', StateSchema);