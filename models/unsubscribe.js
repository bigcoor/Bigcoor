'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , UnsubscribeSchema

UnsubscribeSchema = new Schema({
    userId             : { type: Schema.ObjectId, ref: 'user' }
  , projectId          : { type: Schema.ObjectId, ref: 'project' }
  , notificationTypeId : { type: Schema.ObjectId, ref: 'notification_type' }
  , title              : { type: String }
  , comment            : { type: String, required: true }
  , commentHtml        : { type: String, required: true }
});

UnsubscribeSchema.plugin(modelPlugin);

module.exports = mongoose.model('unsubscribe', UnsubscribeSchema);