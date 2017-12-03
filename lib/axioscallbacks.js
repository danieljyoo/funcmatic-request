'use strict';

var axios = require('axios')

function getCallback(url, config, callback) {
  if (!config) config = { }
  axios.get(url, config)
  .then((resp) => {
    callback(null, formatAxiosResp(resp))
  })
  .catch((err) => {
    callback(err)
  })
}

function postCallback(url, data, config, callback) {
  if (!config) config = { }
  axios.post(url, data, config)
  .then((resp) => {
    callback(null, formatAxiosResp(resp))
  })
  .catch((err) => {
    callback(err)
  })
}

function putCallback(url, data, config, callback) {
  if (!config) config = { }
  axios.put(url, data, config)
  .then((resp) => {
    callback(null, formatAxiosResp(resp))
  })
  .catch((err) => {
    callback(err)
  })
}

function deleteCallback(url, config, callback) {
  if (!config) config = { }
  axios.delete(url, config)
  .then((resp) => {
    callback(null, formatAxiosResp(resp))
  })
  .catch((err) => {
    callback(err)
  })
}

/*
{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the headers that the server responded with
  // All header names are lower cased
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
*/

function formatAxiosResp(resp) {
  // these are axios specific fields
  delete resp['config']
  delete resp['request']
  return resp
}

module.exports = { 
  getCallback,
  postCallback,
  putCallback,
  deleteCallback
}
