describe "Mathematic helper function", ->
	it "counts squere", ->
		(expect (square 2)) . toEqual 4
	
	it "counts cube", ->
		(expect (cube 3)) .toEqual 27
