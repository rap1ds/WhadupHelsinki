API = 
	events: []

	get: {
		"/api" : (req, res) ->
			res.send "Hello from API!"
				
		"/api/events" : (req, res) ->
			res.send API.events
		}
		
	post: {
		"/api/events" : (req, res) ->
			API.events.push req.body
			res.send 201
	}

module.exports = API