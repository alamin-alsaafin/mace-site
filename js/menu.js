$( document ).ready(function() {
    
    $('.menu-button').click(function (e) {
        e.preventDefault();
        $('#mainmenu').removeClass("slideOutRight hide");
        $('#mainmenu').addClass("animated slideInRight show");
    });

		$('#close').click(function() {
            $('#mainmenu').removeClass( "slideInRight show" );
            $('#mainmenu').addClass( "animated  slideOutRight " );

		});

	});

