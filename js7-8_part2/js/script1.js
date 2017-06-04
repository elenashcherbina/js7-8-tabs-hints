$(document).ready(function(){

			$('.tooltip').each(function(){
				$('.tooltip').hide();
				$(this).parent().hover(function(){
						$(this).find('.tooltip').fadeIn('fast');
	}, function(){
		$(this).find('.tooltip').fadeOut('fast');
	});
});

});
