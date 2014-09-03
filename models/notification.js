'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , NotificationSchema

NotificationSchema = new Schema({
    userId             : { type: Schema.ObjectId, ref: 'user' }
  , projectId          : { type: Schema.ObjectId, ref: 'project' }
  , dismissed          : { type: Boolean, default: false, required: true }
  , notificationTypeId : { type: Schema.ObjectId, ref: 'notification_type' }
  , backerId           : { type: Schema.ObjectId, ref: 'backer' }
  , updateId           : { type: Schema.ObjectId, ref: 'update' }
});

NotificationSchema.plugin(modelPlugin);

module.exports = mongoose.model('notification', NotificationSchema);