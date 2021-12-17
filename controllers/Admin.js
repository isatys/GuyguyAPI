'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.adminUser = function adminUser (req, res, next) {
  var admin = req.swagger.params['admin'].value;
  var email = req.swagger.params['email'].value;
  Admin.adminUser(admin,email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
