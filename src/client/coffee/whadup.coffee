$ -> 
	window.EventList = Backbone.Collection.extend {
		model: Event
		url: '/api/events/'
	}
	
	window.Events = new EventList();
	
	window.EventView = Backbone.View.extend {
		tagName: "li"
		
		template: _.template ($ "#event-template") .html()
		
		initialize: ->
			_.bindAll this, 'render'
			@model.view = @
			
		render: ->
			console.log 'EventView.render'
			($ @el) .html @template @model.toJSON()
			return @
	}
	
	window.AppView = Backbone.View.extend {
		el: $ '#eventapp'
		
		initialize: ->
			_.bindAll this, 'addOne', 'addAll', 'render'
		
			Events.bind 'add', @addOne;
			Events.bind 'reset', @addAll;
			Events.bind 'all', @render;
		
			Events.fetch()
		
		render: ->
			console.log 'AppView.render'
		
		addOne: (event) ->
			console.log 'AppView.addOne'
			view = new EventView {model: event}
			(@$ "#event-list").append view.render().el
			
		addAll: ->
			console.log 'AppView.addAll'
			Events.each @addOne
	}
	
	window.App = new AppView