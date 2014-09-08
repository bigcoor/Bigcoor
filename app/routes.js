'use strict';

var index      = require('../models/index')
  , bee        = require('apibee')
  , configPath = __dirname + '../config/config.json';

module.exports = function(router) {
  var api = new bee(router, 'v1', configPath)

  api.group('Index', function(api) {
    api.get('/', function(req, res) {
      res.render('index', index.index);
    });
  })
};