'use strict';


/**
 * Create new server
 *
 * serverName String 
 * admin String The server admin user name (optional)
 * no response value expected for this operation
 **/
exports.createServer = function(serverName,admin) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete message
 *
 * serverName String The name server
 * no response value expected for this operation
 **/
exports.deleteServer = function(serverName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit the server
 *
 * serverName String 
 * no response value expected for this operation
 **/
exports.editServer = function(serverName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * The list server
 *
 * serverName String 
 * admin String The server admin user name (optional)
 * returns List
 **/
exports.server = function(serverName,admin) {
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

