$(document).ready(function() {
	
	 function makeGrid(gridNum){
		for(var row = 0; row < gridNum; row++){
			for(var column = 0; column < gridNum; column++){
				$("#container").append("<div class='square'></div>");
			}
		}


		var h = ((500 - 2*gridNum)/gridNum);
		console.log(h);
		$(".square").css('width', (500 - 2*gridNum)/gridNum);
		$(".square").css('height', (500 - 2*gridNum)/gridNum);


		$('.square').hover(
			function(){
				$(this).css('background-color', 'red');
			},
			function(){
				$(this).css('background-color', 'red');
			}
		);

	}

	makeGrid(16);

	
	$('.square').hover(
		function(){
			$(this).css('background-color', 'red');
		},
		function(){
			$(this).css('background-color', 'red');
		}
	);

	var input = 0;

	$('button').click(function(){
		$('.square').css('background-color', 'none');
		input = prompt("Please select how may squares per side " + 
			"to make the new grid?");	
		console.log("inside:  " + input);
		$(".square").replaceWith(makeGrid(input));
	});
	
	makeGrid(input);
	console.log("outside: " + input);
});