'use strict';

var utils = require('../utils/writer.js');
var Server = require('../service/ServerService');

module.exports.createServer = function createServer (req, res, next) {
  var serverName = req.swagger.params['serverName'].value;
  var role = req.swagger.params['role'].value;
  Server.createServer(serverName,role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteServer = function deleteServer (req, res, next) {
  var serverName = req.swagger.params['serverName'].value;
  Server.deleteServer(serverName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editServer = function editServer (req, res, next) {
  var serverName = req.swagger.params['serverName'].value;
  Server.editServer(serverName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.server = function server (req, res, next) {
  var serverName = req.swagger.params['serverName'].value;
  var role = req.swagger.params['role'].value;
  Server.server(serverName,role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
