'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , UpdateSchema

UpdateSchema = new Schema({
    userId      : { type: Schema.ObjectId, ref: 'user' }
  , projectId   : { type: Schema.ObjectId, ref: 'project' }
  , title       : { type: String }
  , comment     : { type: String, required: true }
  , commentHtml : { type: String, required: true }
});

UpdateSchema.plugin(modelPlugin);

module.exports = mongoose.model('update', UpdateSchema);