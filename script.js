$(document).ready(function() {
	
	 makeGrid(16);
	 numSquare();
	 changeColor();
	 randColor();

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
				$(this).css('background-color', '#00ff84');
			},
			function(){
				$(this).css('background-color', '#00ff84');
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
		
	function changeColor(){
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
					input = prompt("Please try again: blue, green, yellow, " + 
				"or gray ");
					$('.square').css('background-color', input);
					break;
			}
		});
	};

	function randColor() {
		$('.butt-rand').click(function(){
			randomHover();
		});
	};
			
		
		




	function randomHover() {
		$('.square').hover(function(){
				$(this).css('background-color', randomcolor());
		}, function(){
				$(this).css('background-color', randomcolor());
		});
	};

	/* This is not my function !! I borrowed it from Github user: sidgupta234 */
	function randomcolor(){
	var letters='123456789ABCDEF'.split('');
	var color='#';
	
	for(var i=0;i<6;i++){
		color += letters[Math.round(Math.random() * 15)];
		
	}
	return color;
	}
	console.log(randomcolor());


});