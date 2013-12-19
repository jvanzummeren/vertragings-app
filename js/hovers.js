var hoverTimeoutId;
var $hoverElement;



function initHovers(){

	$( document ).on( "touchstart", ".traject-short", function() {
		$hoverElement = $(this);

		clearTimeout(hoverTimeoutId);

		hoverTimeoutId = setTimeout(function(){
			$hoverElement.addClass("hover");
		}, 50);
		
	});

	$( document ).on( "touchend", ".traject-short", function() {
		clearTimeout(hoverTimeoutId);
		setTimeout(function(){
			$hoverElement.removeClass("hover");
		}, 50);
	});

	$( document ).on( "touchmove", ".traject-short", function() {
		setTimeout(function(){
			$hoverElement.removeClass("hover");
		}, 50);
		clearTimeout(hoverTimeoutId);
	});
  

}
