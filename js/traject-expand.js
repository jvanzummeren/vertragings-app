/*traject-short*/
/*transport*/

$(function(){

	$( document ).on( "click", ".traject-short", function() {

		var $li = $(this).closest('li');

		if($li.hasClass('is-selected')){

			$li.removeClass('is-selected');
			$li.find('.transport').slideUp();
			$li.find('.traject-short-icons').fadeIn();
			//$li.find('.iconsprite--collapse').fadeTo(400, 0);

			
		}else{
			$traject_container = $(this).closest('.traject-container');
			$traject_container.find('li').each(function(index, value){
				
				if($(this).hasClass('is-selected')){
					$(this).removeClass('is-selected');
					$(this).find('.transport').slideUp();
					$(this).find('.traject-short-icons').fadeIn();
					//$(this).find('.iconsprite--collapse').fadeTo(400, 0);


				}
			});

			$li.addClass('is-selected');
			$li.find('.transport').slideDown();
			//$li.find('.iconsprite--collapse').fadeTo(400, 1);
			$li.find('.traject-short-icons').fadeOut();


		}
	})
})