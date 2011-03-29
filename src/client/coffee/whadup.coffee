$ -> 
	window.Event = Backbone.Model.extend {
		EMPTY: "New event"
		
		initialize: ->
			if not @get "title"
				@set {title: @EMPTY}
	}
	
	window.EventList = Backbone.Collection.extend {
		model: Event
		url: '/api/events/'
	}
	
	window.Events = new EventList([{title: "Foo Fighters @ Kalasamata"}, {title: "Maalaisn•ÀÏyttelyt @ Messukeskus"}]);

	
	window.EventView = Backbone.View.extend {
		tagName: "li"
		
		template: _.template ($ "#event-template") .html()
		
		initialize: ->
			@model.view = @
			
		render: ->
			($ @el) .html @template @model.toJSON()
			return @
	}
	
	window.AppView = Backbone.View.extend {
		el: $ '#eventapp'
		
		initialize: ->
			_.bindAll this, 'addOne', 'addAll'
		
			Events.bind 'add', @addOne
			Events.bind 'refresh', @addAll
		
			Events.fetch()
		
		addOne: (event) ->
			view = new EventView {model: event}
			(@$ "#event-list").append view.render().el
			
		addAll: ->
			Events.each @addOne
			
	}
	
	window.App = new AppView