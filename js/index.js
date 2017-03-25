$(document).ready(function() {
    
    
    // $(".links").on('click', '.menu-btn' function(){
    // 	if ($(this).hasClass('active')) {
    // 	    $(this).removeClass('active');
    
    // 	} else {
    // 		$(this).addClass('active');
    		
    // 	}
    // })
    	
    	
    $('section.img-slider .carousel').carousel({
        pause: "hover",
        interval: 5000
    });
        
    var startImg = $('section.img-slider .item.active > img').attr('src');
    $('section.img-slider').append('<img src="' + startImg + '">');
        
    $('section.img-slider .carousel').on('slid.bs.carousel', function () {
        var bscn = $(this).find('.item.active > img').attr('src');
            $('section.img-slider > img').attr('src',bscn);
    })

});