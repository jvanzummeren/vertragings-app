$(function(){
	$('.traject-toevoegen-nextstep button').click(function(){
		$('.first-step').hide();
		$('.second-step').show();
	});
	$('.traject-toevoegen-back button').click(function(){
		$('.first-step').show();
		$('.second-step').hide();		
	});

	$('.traject-toevoegen-meldingen').click(function(){
		alert("Toevoegen van melding bij opvallende vertraging, niet in het prototype geimplementeerd.");
	})

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
	})

})