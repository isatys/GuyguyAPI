'use strict';


/**
 * Create new message
 *
 * message String 
 * email String 
 * serverName String  (optional)
 * no response value expected for this operation
 **/
exports.createMessage = function(message,email,serverName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete message
 *
 * message String 
 * email String 
 * serverName String  (optional)
 * no response value expected for this operation
 **/
exports.deleteMessage = function(message,email,serverName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit the message
 *
 * message String 
 * email String 
 * serverName String  (optional)
 * no response value expected for this operation
 **/
exports.editMessage = function(message,email,serverName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * The message post
 *
 * message String  (optional)
 * email String  (optional)
 * serverName String  (optional)
 * returns List
 **/
exports.getMessage = function(message,email,serverName) {
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

