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
/*
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
*/

function formatAxiosResp(resp) {
  // these are axios specific fields
  //delete resp['config']
  //delete resp['request']
  return resp
}

module.exports = { 
  getCallback,
  postCallback,
  putCallback,
  deleteCallback
}

