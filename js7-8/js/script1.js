$(document).ready(function(){
	$('.tab_content>div:not(":first-of-type")').hide();
	$('.tab_menu li').each(function (i){
		$(this).attr('data-tab', 'tab'+i)
	});
	$('.tab_content>div').each(function (i){
		$(this).attr('data-tab', 'tab'+i)
	});
	$('.tab_menu li').on('click', function (){
		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.tab_wrapper');
		getWrapper.find('.tab_menu li').removeClass('active');
		$(this).addClass('active');
		getWrapper.find('.tab_content>div').hide();
		getWrapper.find('.tab_content>div[data-tab = '+dataTab+']').show();
	})
});
