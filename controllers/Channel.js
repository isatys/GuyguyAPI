'use strict';

var utils = require('../utils/writer.js');
var Channel = require('../service/ChannelService');

module.exports.channel = function channel (req, res, next) {
  var channelName = req.swagger.params['channelName'].value;
  var role = req.swagger.params['role'].value;
  Channel.channel(channelName,role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createChannel = function createChannel (req, res, next) {
  var serverName = req.swagger.params['serverName'].value;
  var role = req.swagger.params['role'].value;
  Channel.createChannel(serverName,role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteChannel = function deleteChannel (req, res, next) {
  var channelName = req.swagger.params['channelName'].value;
  Channel.deleteChannel(channelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editChannel = function editChannel (req, res, next) {
  var serverName = req.swagger.params['serverName'].value;
  Channel.editChannel(serverName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
