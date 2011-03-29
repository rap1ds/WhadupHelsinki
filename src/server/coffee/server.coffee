express = require 'express'
app = express.createServer()
API = require './API'

app.configure () -> 
	app.use express.static __dirname + '/../../client/public'
	app.use express.errorHandler dumpExceptions: true, showStack: true
	app.use express.bodyParser()

app.get route, callback for own route, callback of API.get
app.post route, callback for own route, callback of API.post
	
app.listen 4000