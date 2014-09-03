'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , CommentSchema

CommentSchema = new Schema({
    title           : { type: String }
  , comment         : { type: String, required: true }
  , commentHtml     : { type: String }
  , commentableId   : { type: Number }
  , commentableType : { type: String, required: true }
  , userId          : { type: Schema.ObejectId, ref: 'user' }
  , projectUpdate   : { type: Boolean, default: false }
});

CommentSchema.plugin(modelPlugin);

module.exports = mongoose.model('comment', CommentSchema);