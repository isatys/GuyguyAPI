'use strict';


/**
 * Creation of a new user
 *
 * userName String 
 * password String 
 * email String 
 * userAdmin String  (optional)
 * no response value expected for this operation
 **/
exports.createUser = function(userName,password,email,userAdmin) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete user
 *
 * email String 
 * userName String  (optional)
 * userAdmin String  (optional)
 * password String  (optional)
 * no response value expected for this operation
 **/
exports.deleteUser = function(email,userName,userAdmin,password) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit user
 *
 * userName String  (optional)
 * userAdmin String  (optional)
 * password String  (optional)
 * email String  (optional)
 * no response value expected for this operation
 **/
exports.editUser = function(userName,userAdmin,password,email) {
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
 * userAdmin String  (optional)
 * returns List
 **/
exports.users = function(email,userName,userAdmin) {
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

