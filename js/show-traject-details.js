$(function(){

	$('.add, .closetraject').click(function(){
            
        if ($('.addtraject').is(':hidden')) {
           
           $('.addtraject').show('slide',{direction:'down'},400);
        } else {
           
           $('.addtraject').hide('slide',{direction:'down'},400);
        }
	});

	$('.settings, .closesettings').click(function(){
            
        if ($('.editsettings').is(':hidden')) {
           
           $('.editsettings').show('slide',{direction:'down'},400);
        } else {
           
           $('.editsettings').hide('slide',{direction:'down'},400);
        }
	});

})