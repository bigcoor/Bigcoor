'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_plugin');

require('mongoose-long')(mongoose);

var SchemaTypes = mongoose.Schema.Types
  , Schema = mongoose.Schema
  , UserSchema

UserSchema = new Schema({
  email : { type: String, unique: true }
});

UserSchema.plugin(modelPlugin);

module.exports = mongoose.model('users', User);