$(function(){


	$( document ).on( "click", ".traject-description .icon-switch", function() {
		var $container =  $(this).closest(".traject-container");
		var $from = $container.find('.from');
		var $to = $container.find('.to');

		$from.css('position', 'relative');
		$to.css('position', 'relative');
		console.log("click");
		if($container.data("reversed")){
			$container.data("reversed", false);
			$from.animate({
				top : '20px'
			}, 300);
			$to.animate({
				top : '-20px'
			}, 300);

		}else{
			$container.data("reversed", true);
			$from.animate({
				top : '0px'
			}, 300);
			$to.animate({
				top : '0px'
			}, 300);
		}
	})

})