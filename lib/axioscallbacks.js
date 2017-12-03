'use strict';

var axios = require('axios')

function getCallback(url, config, callback) {
  if (!config) config = { }
  axios.get(url, config)
  .then((resp) => {
    callback(null, resp.data)
  })
  .catch((err) => {
    callback(err)
  })
}

function postCallback(url, data, config, callback) {
  if (!config) config = { }
  axios.post(url, data, config)
  .then((resp) => {
    callback(null, resp.data)
  })
  .catch((err) => {
    callback(err)
  })
}

function putCallback(url, data, config, callback) {
  if (!config) config = { }
  axios.put(url, data, config)
  .then((resp) => {
    callback(null, resp.data)
  })
  .catch((err) => {
    callback(err)
  })
}

function deleteCallback(url, config, callback) {
  if (!config) config = { }
  axios.delete(url, config)
  .then((resp) => {
    callback(null, resp.data)
  })
  .catch((err) => {
    callback(err)
  })
}

module.exports = { 
  getCallback,
  postCallback,
  putCallback,
  deleteCallback
}
