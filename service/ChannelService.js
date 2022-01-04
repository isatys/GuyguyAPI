'use strict';


/**
 * The list channel
 *
 * channelName String 
 * admin String The channel admin user name (optional)
 * returns List
 **/
exports.channel = function(channelName,admin) {
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


/**
 * Create new channel
 *
 * serverName String 
 * admin String The channel admin user name (optional)
 * no response value expected for this operation
 **/
exports.createChannel = function(serverName,admin) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete message
 *
 * channelName String The name channel
 * no response value expected for this operation
 **/
exports.deleteChannel = function(channelName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit the channel
 *
 * serverName String 
 * no response value expected for this operation
 **/
exports.editChannel = function(serverName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

