var sync = require('synchronize')

const request = require('../lib/request')

describe('CRUD Requests', () => {
  it ('should make a synchronous get request when run in fiber', () => {
    sync.fiber(() => {
      var data = request.get('https://goalbookapp.com/toolkit/healthcheck')
      data = request.get('https://postman-echo.com/get?hello=world')
      expect(data).toBe(expect.anything())
    })
  })
  it ('should make a synchronous post request when run in fiber', () => {
    sync.fiber(() => {
      console.log('before request')
      var data = { "hello": "world" }
      var resp = request.post('https://postman-echo.com/post', data)
      console.log("post", resp)
      var resp = request.get('https://postman-echo.com/get?hello=world')
      console.log("get", resp)
      expect(resp).toBe(expect.anything())
    })
  })
}) 



