var sync = require('synchronize')

const request = require('../lib/request')

request.setConfig({
  baseURL: 'http://dbapi.io/db/coll'  // RESTHeart demo environment
})

//expect(houseForSale).toMatchObject(desiredHouse);
describe('RESTHeart Synchronous Requests', () => {
  it ('should insert a document, update it, then delete it all synchronously', done => {
    sync.fiber(() => {
      // write a doc to RESTHeart
      var doc = { 
        "hello": "world",
        "foo": "bar"
      }
      var response = request.post(`/`, doc)
      expect(response).toMatchObject({
        status: 201,
        data: ''
      })

      // get the mongo document id from the restheart response
      var docurl = response.headers.location
      var docurlsplit = docurl.split('/')
      var docid = docurlsplit[docurlsplit.length - 1]
      expect(docid).toBeTruthy()
      
      // get the doc
      response = request.get(`/${docid}`)
      expect(response).toMatchObject({
        status: 200,
        data: doc
      })
      
      // update the doc
      var patchdoc = {
        "foo": "updated",
        "new": "value"
      }
      response = request.patch(`/${docid}`, patchdoc)
      expect(response).toMatchObject({
        status: 200,
        data: ''
      })
      
      // get the updated doc
      response = request.get(`/${docid}`)
      expect(response).toMatchObject({
        status: 200,
        data: patchdoc
      })
      
      // delete the doc
      response = request.delete(`/${docid}`)
      expect(response).toMatchObject({
        status: 204,
        data: ''
      })
      done()
    })
  })
}) 



