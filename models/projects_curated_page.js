'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , ProjectsCuratedPageSchema

ProjectsCuratedPageSchema = new Schema({
    userId          : { type: Schema.ObjectId, ref: 'user' }
  , projectId       : { type: Schema.ObjectId, ref: 'project' }
  , curatedPageId   : { type: Schema.ObjectId, ref: 'curated_page' }
  , description     : { type: String }
  , descriptionHtml : { type: String }
});

ProjectsCuratedPageSchema.plugin(modelPlugin);

module.exports = mongoose.model('projects_curated_page', ProjectsCuratedPageSchema);