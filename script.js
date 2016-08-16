$(document).ready(function() {
	
	for(var row = 0; row < 16; row++){
		for(var column = 0; column < 16; column++){
			$("#container").append("<div class='square'></div>");
		}
	}
});