const sync = require('synchronize')
const request = require('../lib/request')

sync.fiber(() => {
  console.log('before request')
  var data = request.get('https://goalbookapp.com/toolkit/healthcheck')
  console.log('after get', data)
  var postData = { "hello": "world" }
  var resp = request.post('https://postman-echo.com/post', postData)
  console.log('after post', resp)
  var putData = { "hello": "put" }
  var putResp = request.put('https://postman-echo.com/put', putData)
  console.log('after put', putResp)
  data = request.delete('https://postman-echo.com/delete?hello=delete')
  console.log('after delete', data)
})

console.log("outside of fiber")
setTimeout(() => { console.log("timeout!") }, 10000)