$(function(){
	$('.traject-toevoegen-nextstep button').click(function(){
		$('.first-step').hide();
		$('.second-step').show();
		$('.toevoegen').scrollTop(0);
		$('.toevoegen .button-cancel').hide();
		$('.toevoegen .button-back').css('display', 'inline-block');

	});

	$('.toevoegen .button-back').click(function(){
		$('.first-step').show();
		$('.second-step').hide();
		$('.toevoegen').scrollTop(0);	
		$('.toevoegen .button-cancel').show();
		$('.toevoegen .button-back').hide();	
	});

	$('.traject-toevoegen-finish button').click(function(){
		trajectToevoegen();
	});

	$('.traject-toevoegen-meldingen').click(function(){
		alert("Toevoegen van melding bij opvallende vertraging, niet in het prototype geimplementeerd.");
	});


	$('.traject-toevoegen-customimage .block2').click(function(){
		alert("Hier kun je een eigen afbeeldingen selecteren uit de filmrol. Niet in het prototype geimplementeerd.");
	})

	$('.custom-images li').each(function(index, value){
		$(this).data('index', index);
	});

	$('.custom-images li').click(function(){
		$('.custom-images li').removeClass('selected');
		$(this).addClass('selected');
		$('.selected-image').val($(this).data('index'));
	});

	function trajectToevoegen(){
		var trajectNaam = $('.naam-input').val();
		var van = $('.plaatsnaam-van input').val();
		var naar = $('.plaatsnaam-naar input').val();
		saveTrajectSlide(trajectNaam, van, naar);
		addTrajectSlide(trajectNaam, van, naar);
		mySwiper.swipeTo($('.swiper-slide').size()-1, 500, function(){});
		hideToevoegen();
	}

	function saveTrajectSlide(trajectNaam, van, naar){
		trajecten.push({
			trajectNaam : trajectNaam,
			van : van,
			naar: naar
		});
		storage.set('trajecten', trajecten);
	}
});

	function showToevoegen(){
		$('.first-step').show();
		$('.second-step').hide();	
		$('.toevoegen').height($(window).height());
		$('.toevoegen .button-cancel').show();
		$('.toevoegen .button-back').hide();

		var trajectNaam = $('.naam-input').val("");
		var van = $('.plaatsnaam-van input').val("");
		var naar = $('.plaatsnaam-naar input').val("");
		$('.toevoegen').css('top', '100%');
		$('.toevoegen').show();

		$('.toevoegen').animate({
			top:0
		}, 250);

		$('.navigation-bar-toevoegen').css('top', '100%');
		$('.navigation-bar-toevoegen').animate({
			top:0
		}, 250);
	}

	function hideToevoegen(){

		$('.toevoegen').animate({
			top:'100%'
		}, {
			duration:250,
			complete: function(){
				$(this).hide();
			}
		});

		$('.navigation-bar-toevoegen').animate({
			top:'100%'
		}, 250);
	}