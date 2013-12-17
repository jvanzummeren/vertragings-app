  $(function() {

    $( ".plaatsnaam-input" ).autocomplete({
      source: plaatsnamenArray,
      minLength:3,
      open: function() { 
        $('.ui-menu').css('width', '98%');
        $('.ui-menu').css('left', '0');
        $('.ui-menu').css('border-radius', '0');

      }
    }).off('blur').data( "ui-autocomplete" )._renderItem = function( ul, item ) {
      var number = Math.floor(Math.random() * 99);
      var place = (number%2 ==0) ? "Voorbeeldstraat 1" : "Station";

      return $( "<li>" )
        .append( "<a>" + item.label + "<span>"+place+"</span></a>" )
        .appendTo( ul );
    };

    $( ".plaatsnaam-input" ).focus(function(e){
      var container = $(this).closest("div")
      container.find('a').show();

      if(!container.data("top")){
        var top = container.css("top");
        container.data("top", top);      
      }

      $(this).closest("div").animate({
        top: 0
      }, 200);
    });

    $( ".plaatsnaam-input" ).blur(function(e){
        var container = $(this).closest("div")
        container.find('a').hide();
        $(this).closest("div").animate({
          top: container.data("top")
        }, 200);
    });


  });