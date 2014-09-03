'use strict';

var mongoose    = require('mongoose')
  , modelPlugin = require('../lib/model_base');

require('mongoose-long')(mongoose);

var Schema = mongoose.Schema
  , UserSchema

UserSchema = new Schema({
    provider             : { type: String, required: true }
  , email                : { type : String }
  , name                 : { type : String }
  , nickname             : { type : String }
  , bio                  : { type : String }
  , imageUrl             : { type : String }
  , newsletter           : { type: Boolean, default: false }
  , projectUpdates       : { type: Boolean, default: false }
  , admin                : { type: Boolean, default: false }
  , fullName             : { type: String }
  , addressStreet        : { type: String }
  , addressNumber        : { type: String }
  , addressComplement    : { type: String }
  , addressNeighbourhood : { type: String }
  , addressCity          : { type: String }
  , addressState         : { type: String }
  , addressZipCode       : { type: String }
  , phoneNumber          : { type: String }
  , credits              : { type: Number, default: 0 }
  , locale               : { type: String, default: 'pt' }
  , cpf                  : { type: String }
  , encryptedPassword    : { type: String, required: true }
  , resetPasswordToken   : { type: String }
  , resetPasswordSentAt  : { type: Date }
  , rememberCreatedAt    : { type: Date }
  , signInCount          : { type: Number, default: 0 }
  , currentSignInAt      : { type: Date }
  , lastSignInAt         : { type: Date }
  , currentSignInIp      : { type: String }
  , lastSignInIp         : { type: String }
  , githubLink           : { type: String }
  , otherLink            : { type: String }
  , uploadedImage        : { type: String }
});

UserSchema.plugin(modelPlugin);

module.exports = mongoose.model('user', UserSchema);