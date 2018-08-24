jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;	
	});

	$("#gotop").hover(function() {
		$(this).css({opacity:'1'});
	}, function() {
		$(this).css({opacity:''});
	});


	 jQuery(window).scroll(function() {
        if ( jQuery(this).scrollTop() > 300){ //設定大於300px才顯示浮層
            jQuery('#gotop').stop(true,true).fadeIn("fast");
        } else {
            jQuery('#gotop').stop(true,true).fadeOut("fast");
        }
    });
}); 


/* 滑動的GOTO  javascript:goTop('.timeline_searchArea'); */
function goTop(val) {
	var gotop_i = 0
	jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
}
