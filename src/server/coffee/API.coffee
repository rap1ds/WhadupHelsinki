API = 
	events: [{title: "Sample event"}]

	get: {
		"/api" : (req, res) ->
			console.log "GET /api"
			res.send "Hello from API!"
				
		"/api/events" : (req, res) ->
			console.log "GET /api/events"
			res.send API.events
		}
		
	post: {
		"/api/events" : (req, res) ->
			API.events.push req.body
			res.send 201
	}

module.exports = API