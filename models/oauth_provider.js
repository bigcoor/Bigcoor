'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , OauthProviderSchema

OauthProviderSchema = new Schema({
    name     : { type: String, required: true }
  , key      : { type: String, required: true }
  , secret   : { type: String, required: true }
  , scope    : { tyep: String }
  , order    : { type: Number }
  , strategy : { tyep: String }
  , path     : { tyep: String }
});

OauthProviderSchema.plugin(modelPlugin);

module.exports = mongoose.model('oauth_provider', OauthProviderSchema);