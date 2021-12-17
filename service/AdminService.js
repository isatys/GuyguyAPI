'use strict';


/**
 * The list of admin user
 * List of users admin  
 *
 * admin String The user name of the administrator (optional)
 * email String  (optional)
 * returns List
 **/
exports.adminUser = function(admin,email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

