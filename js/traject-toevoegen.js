$(function(){
	$('.traject-toevoegen-nextstep button').click(function(){
		$('.first-step').hide();
		$('.second-step').show();
	});
	$('.traject-toevoegen-back button').click(function(){
		$('.first-step').show();
		$('.second-step').hide();		
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
		$('.toevoegen').hide();
	}

	function saveTrajectSlide(trajectNaam, van, naar){
		trajecten.push({
			trajectNaam : trajectNaam,
			van : van,
			naar: naar
		});
		storage.set('trajecten', trajecten);
	}

})