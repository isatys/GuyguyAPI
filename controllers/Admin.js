'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.adminUser = function adminUser (req, res, next) {
  var role = req.swagger.params['role'].value;
  var email = req.swagger.params['email'].value;
  Admin.adminUser(role,email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
