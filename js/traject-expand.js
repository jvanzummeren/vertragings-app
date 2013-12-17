/*traject-short*/
/*transport*/

$(function(){

	$('.traject-short').click(function(){
		var $li = $(this).closest('li');

		if($li.hasClass('is-selected')){
			$li.removeClass('is-selected');
			$li.find('.transport').slideUp();
		}else{
			$li.addClass('is-selected');
			//$li.find('.transport').css('position', 'relative');
			//$li.find('.transport').css('margin-top', '-300px');
			$li.find('.transport').slideDown();
			/*$li.find('.transport').animate({
				marginTop : 0
			}, 500);	*/
		}
	})
})