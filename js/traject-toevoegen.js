var editSlide;
var editMode = false;

$(function(){
	$('.traject-toevoegen-customimage').click(function(){
		$('.first-step').hide();
		$('.second-step').show();
		$('.toevoegen').scrollTop(0);
		$('.button-finish').hide();
		$('.button-choose').show();

		$('.toevoegen .button-cancel').hide();
		$('.toevoegen .button-back').css('display', 'inline-block');

	});

	$('.toevoegen .button-back, .toevoegen .button-choose').click(function(){
		$('.first-step').show();
		$('.second-step').hide();
		if(editMode){
			$('.button-edit').show();
		}else{
			$('.button-finish').show();
		}
		$('.button-choose').hide();
		$('.toevoegen').scrollTop(0);	
		$('.toevoegen .button-cancel').show();
		$('.toevoegen .button-back').hide();	
	});

	$('.button-finish').click(function(){
		trajectToevoegen();
	});

	$('.button-edit').click(function(){
		trajectEdit(editSlide);
	});


	$('.traject-toevoegen-meldingen').click(function(){
		alert("Toevoegen van melding bij opvallende vertraging, niet in het prototype geimplementeerd.");
	});


	$('.traject-toevoegen-customimage .block2').click(function(){
		alert("Hier kun je een eigen afbeeldingen selecteren uit de filmrol. Niet in het prototype geimplementeerd.");
	});

	$( document ).on( "click", ".traject-description .icon-edit", function() {

		var container = $(this).closest('.swiper-slide');
		editSlide = container;
		var naam = container.find('.traject-name').html();
		var van = container.find('.from').html();
		var naar = container.find('.to').html();
		var image = $(this).attr('image');
		$('.custom-images li').eq(image).click();

		showToevoegen();
		editMode = true;
		$('h1.titel-edit').show();
		$('h1.titel-toevoegen').hide();
		$('.button-finish').hide();
		$('.button-edit').show();
		$('.naam-input').val(naam);
		$('.plaatsnaam-van input').val(van);
		$('.plaatsnaam-naar input').val(naar);		
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
		var image = $('.selected-image').val();

		trajecten.push({
			trajectNaam : trajectNaam,
			van : van,
			naar: naar,
			image : image
		});

		saveTrajectSlide();
		addTrajectSlide(trajectNaam, van, naar, image);
		mySwiper.swipeTo($('.swiper-slide').size()-1, 500, function(){});
		hideToevoegen();
	}

	function trajectEdit(slide){
		var trajectNaam = $('.naam-input').val();
		var van = $('.plaatsnaam-van input').val();
		var naar = $('.plaatsnaam-naar input').val();
		var image = $('.selected-image').val();
		var index = slide.attr('index');

		editTrajectSlide(slide, trajectNaam, van, naar, image);
		saveEditTrajectSlide(trajectNaam, van, naar, image, index);

		hideToevoegen();
	}

	function saveTrajectSlide(){
		storage.set('trajecten', trajecten);
	}

	function saveEditTrajectSlide(trajectNaam, van, naar, image, index){

		trajecten[index].trajectNaam = trajectNaam;
		trajecten[index].van = van;
		trajecten[index].naar = naar;
		trajecten[index].image = image;

		storage.set('trajecten', trajecten);
	}

});

	function showToevoegen(){
		editMode = false;
		$('.first-step').show();
		$('.second-step').hide();
		$('.button-edit').hide();
		$('.button-finish').show();
		$('.button-choose').hide();
		$('h1.titel-edit').hide();
		$('h1.titel-toevoegen').show();
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