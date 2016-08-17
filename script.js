$(document).ready(function() {
	
	for(var row = 0; row < 16; row++){
		for(var column = 0; column < 16; column++){
			$("#container").append("<div class='square'></div>");
		}
	}

	$('.square').hover(
		function(){
			$(this).css('background-color', 'red');
		},
		function(){
			$(this).css('background-color', 'red');
		}
	);

	$('button').click(function(){
		$('.square').css('background-color', 'none');
		prompt("Please select how may squares to ");
	});
});