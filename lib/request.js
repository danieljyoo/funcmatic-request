'use strict';

var sync = require('synchronize')
var callbacks = require('./axioscallbacks')
var utils = require('./utils')

sync(callbacks, 'getCallback')
sync(callbacks, 'postCallback')
sync(callbacks, 'putCallback')
sync(callbacks, 'deleteCallback')

class Request {
  constructor(config) {
    config = config || { }
    this.config = utils.merge(config, Request.defaultConfig())
  }
  
  get(url, config) {
    var requestConfig = utils.merge(this.config, config || {})
    return callbacks.getCallback(url, requestConfig)
  }
  
  post(url, data, config) {
    var requestConfig = utils.merge(this.config, config || {})
    return callbacks.postCallback(url, data, requestConfig)
  }
  
  put(url, data, config) {
    var requestConfig = utils.merge(this.config, config || {})
    return callbacks.putCallback(url, data, requestConfig)
  }
  
  delete(url, config) {
    var requestConfig = utils.merge(this.config, config || {})
    return callbacks.deleteCallback(url, requestConfig)
  }
  
  static defaultConfig() {
    return {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}

var request = new Request()

module.exports = request
