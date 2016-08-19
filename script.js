$(document).ready(function() {
	
	 makeGrid(16);
	 numSquare();
	 changeColor();

	 function makeGrid(gridNum){
		for(var row = 0; row < gridNum; row++){
			for(var column = 0; column < gridNum; column++){
				$("#container").append("<div class='square'></div>");
			}
		}

		$(".square").css('width', (500 - 2*gridNum)/gridNum);
		$(".square").css('height', (500 - 2*gridNum)/gridNum);

		addHover();
	}


	function addHover(){
		$('.square').hover(
			function(){
				$(this).css('background-color', 'red');
			},
			function(){
				$(this).css('background-color', 'red');
			}
		);
}
	
	function numSquare(){	
		$('.butt-squares').click(function(){
			$('.square').css('background-color', 'none');
			input = prompt("Please select how may squares per side " + 
				"to make the new grid?");	
			$(".square").replaceWith(makeGrid(input));
		});
	}
		
	function changeColor(color){
		$('.butt-color').click(function() {
			input = prompt("Choose by typing either: blue, green, yellow, " + 
				"or gray ");
			switch(input){
				case 'blue':
					$('.square').css('background-color', input)
					break;
				case 'green':
					$('.square').css('background-color', input)
					break;
				case 'yellow':
					$('.square').css('background-color', input)
					break;
				case 'gray':
					$('.square').css('background-color', input)
					break;
				default:
					changeColor();
			}
		});
	}
});