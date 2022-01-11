'use strict';


/**
 * Creation of a new user
 *
 * userName String 
 * password String 
 * email String 
 * role String  (optional)
 * no response value expected for this operation
 **/
exports.createUser = function(userName,password,email,role) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete user
 *
 * email String 
 * userName String  (optional)
 * role String  (optional)
 * password String  (optional)
 * no response value expected for this operation
 **/
exports.deleteUser = function(email,userName,role,password) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit user
 *
 * userName String  (optional)
 * role String  (optional)
 * password String  (optional)
 * email String  (optional)
 * no response value expected for this operation
 **/
exports.editUser = function(userName,role,password,email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * The list of users
 * List of users 
 *
 * email String 
 * userName String  (optional)
 * role String  (optional)
 * returns List
 **/
exports.users = function(email,userName,role) {
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

