  $(function() {

    $( ".plaatsnaam-input" ).autocomplete({
      source: plaatsnamenArray,
      minLength:3,
      open: function() { 
        $('.ui-menu').css('width', '98%');
        $('.ui-menu').css('left', '0');
        $('.ui-menu').css('border-radius', '0');
      },
      select: function (event, ui) {
       // alert(ui.item.value);
        var container = $(this).closest("div");
        removeAutoComplete(container)


      }
    }).off('blur').data( "ui-autocomplete" )._renderItem = function( ul, item ) {
      var number = Math.floor(Math.random() * 99);
      var place = (number%2 ==0) ? "Voorbeeldstraat 1" : "Station";

      return $( "<li>" )
        .append( "<a>" + item.label + "<span>"+place+"</span></a>" )
        .appendTo( ul );
    };



    $( ".plaatsnaam-input" ).focus(function(e){
      $('.overlay').fadeIn(200);
      var container = $(this).closest("div")
      container.find('a').show();

      container.css('z-index', 10);

      $('body').animate({scrollTop:0}, 200);

      if(!container.data("top")){
        var top = container.css("top");
        container.data("top", top);      
      }

      $(this).closest("div").animate({
        top: 0
      }, 200);
    });

    $( ".plaatsnaam a" ).click(function(e){
     
        var container = $(this).closest("div");
        removeAutoComplete(container)
    });


  });

  function removeAutoComplete(container){
    $('.overlay').fadeOut(200);
    $('.ui-autocomplete').hide();

    container.find('a').hide();
    container.animate({
      top: container.data("top")
    }, {duration:200, complete: function(){
      $(this).css('z-index', 0);
    }});
  }