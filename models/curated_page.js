'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , CommentSchema

CommentSchema = new Schema({
    name        : { type: String }
  , description : { type: String }
  , analyticsId : { type: String }
  , logo        : { type: String }
  , videoUrl    : { type: String }
  , permalink   : { type: String }
  , visible     : { type: Boolean, default: false }
  , siteUrl     : { type: String }
});

CommentSchema.plugin(modelPlugin);

module.exports = mongoose.model('comment', CommentSchema);