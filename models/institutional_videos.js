'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , InstitutionalVideosSchema

InstitutionalVideosSchema = new Schema({
    title       : { type: String, unique: true }
  , description : { type: String }
  , videoUrl    : { type: String, unique: true }
  , visible     : { type: Boolean }
});

InstitutionalVideosSchema.plugin(modelPlugin);

module.exports = mongoose.model('institutional_videos', InstitutionalVideosSchema);