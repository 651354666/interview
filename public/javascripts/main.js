jQuery(function(){
	jQuery(jQuery('#section3 .content')[0]).addClass('active');

	jQuery('#section3 .nav-pills>li>a').bind('click', function(){
		jQuery('#section3 .nav-pills>li>a').removeClass('active');
		jQuery(this).addClass('active');
		var index = jQuery(this).parent().index() 
		bgMove(index);
		jQuery('#section3 .content').fadeOut(200);
		window.setTimeout(function(){
			jQuery(jQuery('#section3 .content')[index]).fadeIn();
		}, 300);
		
	});

	jQuery('#roomType').bind('change', function(e){
		var index = $(e.target).children('option:selected').index();
		jQuery('#section3 .content').fadeOut(200);
		window.setTimeout(function(){
			jQuery(jQuery('#section3 .content')[index]).fadeIn();
		}, 300);
	});

	jQuery(jQuery('#section3 .nav-pills>li>a')[0]).click();
})


function bgMove(index){
	jQuery('#section3 .wrapper .bg').css('top', index*40+1+'px');
}