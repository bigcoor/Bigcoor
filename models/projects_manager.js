'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , ProjectsManagerSchema

ProjectsManagerSchema = new Schema({
    userId    : { type: Schema.ObjectId, ref: 'user' }
  , projectId : { type: Schema.ObjectId, ref: 'project' }
});

ProjectsManagerSchema.plugin(modelPlugin);

module.exports = mongoose.model('projects_manager', ProjectsManagerSchema);