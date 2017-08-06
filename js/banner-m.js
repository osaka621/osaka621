var setDate = new Date();
var overDT = new Date('2016/12/16 22:00:00');
var spantime = (overDT - setDate)/1000;
var spantimes = (overDT - setDate);
function zero( v ){
	if( v < 10 ){
		return '0'+v;
	}else{
		return v;
	}
}
$( function(){
	
        $(this).everyTime('1s', function(i) {
             spantime --;
             var d = Math.floor(spantime / (24 * 3600));
             var h = Math.floor((spantime % (24*3600))/3600);
             var m = Math.floor((spantime % 3600)/(60));
             var s = Math.floor(spantime%60);

             if(spantime>0){
                $("#hour").text(h+(d*24));
                $("#min").text(zero(m));
                $("#sec").text(zero(s));
             }else{
                $("#hour").text(0);
                $("#min").text(zero(0));
                $("#sec").text(zero(0));
             }
         });
		 $(this).everyTime('1ms', function(i) {
             spantimes --;
             var ms = Math.floor(spantimes%100);

             if(spantimes>0){
                $("#msec").text(zero(ms));
             }else{
                $("#msec").text(zero(0));
             }
         });
			
			var navp = $('#menu, .pointer, .facebook');
			$(window).scroll(function(){
					if (  $(window).scrollTop() == 0 ) {
						navp.css("opacity","0");
					}else {
						navp.css("display","block");
						navp.css("opacity","0.85");
				}
			});
			
			$('.pointer').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: 0
					}, 1500, 'easeInOutExpo');
				return false;
			});
			
			$('#btnAs').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: $("#section-03").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
			
			$('#btnBs').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: $("#section-04").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
			
			$('#btnCs').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: $("#section-05").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
			
			
			$('#btnDs').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: $("#section-06").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
			
			
			$('#btnEs').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: $("#section-07").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
		
		});