const Card = {
	Name: string
	Filters: {
		Type: string
	}  
	CardId: integer
	Element: [
	    Text: {
	    	Color: '000000',
	    	Font: string,
	    	Size: {
	    		Height: integer,
	    		Width: integer
	    	}
	    	Coord: {
	    		X: integer
	    		Y: integer
	    	}
	    }
	    Img: {
	    	Size: {
	    		Height: integer,
	    		Width: integer
	    	}
	    	Coord: {
	    		X: integer
	    		Y: integer
	    	}	
	    }
	    Art: {
	    	Type: string
	    	...
	    }
	]
	Canvas: {
		Color: 'FFFFFF',
		Size: {
	    		Height: integer,
	    		Width: integer
	    	}
	}
}