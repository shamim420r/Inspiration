  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  $(document).ready(function(){

	var togglemenu = $('#togglemenu');	

	$('button').click(function() {
		togglemenu.slideToggle('fast');
	});

	$(window).resize(function(){
		var w = $(window).width();
		if( w > 769 && togglemenu.is(':hidden')) {
			togglemenu.removeAttr('style');
		}
	});
});

$(document).ready(function () {
      
    /* Toggle menú de móviles  */
    $('#btn-drop').on('click', function (e) {
        e.preventDefault();
        $('#submenu').slideToggle(500);
    }); // fin click
    
    /* Hacer visible el menú al agrandar */
    $(window).resize(function () {
        if (innerWidth >= 480) {
            if ($('#submenu').css('display') == 'none') {
                $('#submenu').removeAttr('style');
            }
        }
    }); // fin resize
});