'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.createUser = function createUser (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  var password = req.swagger.params['password'].value;
  var email = req.swagger.params['email'].value;
  var role = req.swagger.params['role'].value;
  User.createUser(userName,password,email,role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  var email = req.swagger.params['email'].value;
  var userName = req.swagger.params['userName'].value;
  var role = req.swagger.params['role'].value;
  var password = req.swagger.params['password'].value;
  User.deleteUser(email,userName,role,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editUser = function editUser (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  var role = req.swagger.params['role'].value;
  var password = req.swagger.params['password'].value;
  var email = req.swagger.params['email'].value;
  User.editUser(userName,role,password,email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.users = function users (req, res, next) {
  var email = req.swagger.params['email'].value;
  var userName = req.swagger.params['userName'].value;
  var role = req.swagger.params['role'].value;
  User.users(email,userName,role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
