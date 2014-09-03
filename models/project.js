'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , ProjectSchema

ProjectSchema = new Schema({
    name           : { type: String, required: true }
  , userId         : { type: Schema.ObjectId, ref: 'user', required: true }
  , categoryId     : { type: Schema.ObjectId, ref: 'category', required: true }
  , goal           : { type: Number, required: true }
  , expiresAt      : { type: Date, required: true }
  , about          : { type: String, required: true }
  , headline       : { type: String, required: true }
  , videoUrl       : { type: String, required: true }
  , imageUrl       : { type: String }
  , shortUrl       : { type: String }
  , canFinish      : { type: Boolean, required: true }
  , finished       : { type: Boolean, default: false }
  , aboutHtml      : { type: String }
  , visible        : { type: Boolean, default: false }
  , rejected       : { type: Boolean, default: false }
  , recommended    : { type: Boolean, default: false }
  , successful     : { type: Boolean, default: false }
  , permalink      : { type: String }
  , videoThumbnail : { type: String }
  , state          : { type: String }
  , onlineDays     : { type : Number, default: 0 }
});

ProjectSchema.plugin(modelPlugin);

module.exports = mongoose.model('categories', ProjectSchema);