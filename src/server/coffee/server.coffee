express = require 'express'
app = express.createServer()
API = require './API'

app.configure () -> 
	app.use express.static __dirname + '/../../client/public'
	app.use express.errorHandler dumpExceptions: true, showStack: true

api = new API()

app.get route, callback for own route, callback of api.get
app.post route, callback for own route, callback of api.post
	
app.listen 4000