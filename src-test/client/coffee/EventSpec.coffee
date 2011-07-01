describe "Event model", ->
	it "contains title", ->
		event = new whadup.Event {title: "Foo Fighters"}
		
		(expect (event.get 'title')) .toEqual "Foo Fighters"
		
	it "contains default title", ->
		event = new whadup.Event
		
		(expect (event.get 'title')) .toEqual "New event"