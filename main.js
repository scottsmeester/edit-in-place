$(document).on('ready', function() {
  
	$('.editableContent').click(function(){

		var thisText = $(this).text();

		$(this).hide();

		$(this).before('<textarea id="editThis" class="editBox">' + thisText + '</textarea><input id="newText" type="submit" value="Submit">');

		$('input#newText').click(function() {

			var newText = $(this).prev('.editBox').val();

			$('.editableContent').show();

			$(this).next('.editableContent').html(newText);

			$('textarea#editThis, input#newText').hide();

		});


	});


});