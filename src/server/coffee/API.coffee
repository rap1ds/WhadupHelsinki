class API
	constructor: ->
		@get = {
			"/api" : (req, res) ->
				res.send "Hello from API!"
				
			"/api/events" : (req, res) ->
				res.send [{title: "Foo Fighters"}, {title: "Maalaismarkkinat"}]
		}
		
		@post = {
	
		}

module.exports = API