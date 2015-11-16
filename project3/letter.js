$(document).ready(function(){

	// change colors of balloon font

	$('.color1').click(function(){
		$('.letter div div').removeClass('color2');
		$('.letter div div').removeClass('color3');
		$('.letter div div').removeClass('color4');
		$('.letter div div').addClass('color1');
	});

	$('.color2').click(function(){
		$('.letter div div').removeClass('color1');
		$('.letter div div').removeClass('color3');
		$('.letter div div').removeClass('color4');
		$('.letter div div').addClass('color2');
	});

	$('.color3').click(function(){
		$('.letter div div').removeClass('color1');
		$('.letter div div').removeClass('color2');
		$('.letter div div').removeClass('color4');
		$('.letter div div').addClass('color3');
	});

	$('.color4').click(function(){
		$('.letter div div').removeClass('color1');
		$('.letter div div').removeClass('color2');
		$('.letter div div').removeClass('color3');
		$('.letter div div').addClass('color4');
	});

	// type with letters

	var letters = $('.letters').html().split('');
	var letterArray = [];

	for (i = 0; i < letters.length; i++) {
	    console.log(letters[i]);
	 
		var character = letters[i];
	    var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
		var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
	    
	    letterArray.push(characterHTML);
	};

	$('.letters').html(letterArray);

});