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