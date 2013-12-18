/*traject-short*/
/*transport*/

$(function(){

	$( document ).on( "click", ".traject-short", function() {

		var $li = $(this).closest('li');

		if($li.hasClass('is-selected')){

			$li.removeClass('is-selected');
			$li.find('.transport').slideUp();

			

		}else{
			$traject_container = $(this).closest('.traject-container');
			$traject_container.find('li').each(function(index, value){
				
				if($(this).hasClass('is-selected')){
					$(this).removeClass('is-selected');
					$(this).find('.transport').slideUp();
				}
			});

			$li.addClass('is-selected');
			$li.find('.transport').slideDown();

		}
	})
})