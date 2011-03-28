API = require '../../../src/server/js/API'
 
describe "API", ->

	beforeEach ->
		@api = new API
		@req = {}
		@res = 
			send: ->
		spyOn @res, 'send'

	it "returns hello world for '/api'", ->
		route = "/api"
		callback = @api.get[route]
		
		expectedResponse = "Hello from API!"
		
		callback @req, @res
		
		(expect (@res.send.mostRecentCall.args[0])) . toEqual expectedResponse