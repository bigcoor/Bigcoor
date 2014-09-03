'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , StaticContentSchema

StaticContentSchema = new Schema({
    title    : { type: String }
  , body     : { type: String }
  , bodyHtml : { type: String }
});

StaticContentSchema.plugin(modelPlugin);

module.exports = mongoose.model('static_content', StaticContentSchema);