'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , CategoriesSchema

CategoriesSchema = new Schema({
  name : { type: String, required: true }
});

CategoriesSchema.plugin(modelPlugin);

module.exports = mongoose.model('category', CategoriesSchema);