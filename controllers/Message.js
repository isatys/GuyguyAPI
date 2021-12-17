'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.createMessage = function createMessage (req, res, next) {
  var message = req.swagger.params['message'].value;
  var email = req.swagger.params['email'].value;
  var serverName = req.swagger.params['serverName'].value;
  Message.createMessage(message,email,serverName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMessage = function deleteMessage (req, res, next) {
  var message = req.swagger.params['message'].value;
  var email = req.swagger.params['email'].value;
  var serverName = req.swagger.params['serverName'].value;
  Message.deleteMessage(message,email,serverName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editMessage = function editMessage (req, res, next) {
  var message = req.swagger.params['message'].value;
  var email = req.swagger.params['email'].value;
  var serverName = req.swagger.params['serverName'].value;
  Message.editMessage(message,email,serverName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessage = function getMessage (req, res, next) {
  var message = req.swagger.params['message'].value;
  var email = req.swagger.params['email'].value;
  var serverName = req.swagger.params['serverName'].value;
  Message.getMessage(message,email,serverName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
