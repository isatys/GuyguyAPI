'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.createUser = function createUser (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  var password = req.swagger.params['password'].value;
  var email = req.swagger.params['email'].value;
  var userAdmin = req.swagger.params['userAdmin'].value;
  User.createUser(userName,password,email,userAdmin)
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
  var userAdmin = req.swagger.params['userAdmin'].value;
  var password = req.swagger.params['password'].value;
  User.deleteUser(email,userName,userAdmin,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editUser = function editUser (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  var userAdmin = req.swagger.params['userAdmin'].value;
  var password = req.swagger.params['password'].value;
  var email = req.swagger.params['email'].value;
  User.editUser(userName,userAdmin,password,email)
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
  var userAdmin = req.swagger.params['userAdmin'].value;
  User.users(email,userName,userAdmin)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
