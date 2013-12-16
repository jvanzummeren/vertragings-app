$(function(){
	
	//position icons absolute
	$.each($(".traject li"), function(index, value){
		$this = $(value);
		$this.attr("opened", "");
		var $icons = $this.find(".transport");

		$.each($icons, function(index, value){
			console.log(index);
			var $icon = $(value);

			$icon.css("position", "absolute");
			$icon.css("left", index * 30);
			$icon.css("top", 0);
		});
	});

	var rowHeight = 35;

	$(".traject li").click(function(){
		
		$this = $(this);
		//console.log("hello");
		console.log($this.attr("opened"));

		if($(this).attr("opened") == "opened"){
			$(this).attr("opened", "");			
			closeRow($this);
		}else{
			$(this).attr("opened", "opened");
			//closeOtherRows();
			openRow($this);
		}	

	});

	function openRow($row){
		var $transports = $row.find(".transport");
		var $details = $row.find(".information");
		var $time = $row.find(".time");

		console.log("close!");
		 $details.delay(250).show(200);
		 $time.fadeOut(200);

		$transports.animate({
			width:'230px'
		}, 250);

		$transports.each(function(index, value){
			$(value).animate({
				position : "absolute",
				top: index * rowHeight,
				left:0
			}, 250);
		});

		$row.animate({
			height: rowHeight * $transports.size()
		}, 250);

		$row.find(".schedule").animate({
			width:'15%'
		}, 250);
	}

	function closeRow($row){
		console.log("close!");		

		var $transports = $row.find(".transport");
		var $details = $row.find(".information");
		var $time = $row.find(".time");

		$details.hide(200);
		$time.fadeIn(200);

		$transports.css('width','50px');

		$transports.each(function(index, value){
			$(value).animate({
				position : "absolute",
				top: 0,
				left:index * 30
			}, 250);
		});

		$row.animate({
			height: 22
		}, 250);

		$row.find(".schedule").animate({
			width:'35%'
		}, 250);
	}
/*
	function closeOtherRows(){
		$(".traject li").each(function(index, value){
			$row = $(value);
			console.log("closing all others");
			console.log($row.attr("opened"));

			if($row.attr("opened") == "opened"){
				$row.attr("opened", "");				
				closeRow($row);
			}
		});
	}*/

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