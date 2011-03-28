class API
	constructor: ->
		@get = {
			"/api" : (req, res) ->
				res.send "Hello from API!"
				
			"/events" : (req, res) ->
				res.send "Events"
		}
		
		@post = {
	
		}

module.exports = API