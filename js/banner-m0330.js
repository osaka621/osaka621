var setDate = new Date();
var overDT01 = new Date('2017/04/01 10:00:00');
var spantime01 = (overDT01 - setDate)/1000;
var spantimes01 = (overDT01 - setDate);
var overDT02 = new Date('2017/04/03 10:00:00');
var spantime02 = (overDT02 - setDate)/1000;
var spantimes02 = (overDT02 - setDate);
var overDT03 = new Date('2017/04/05 10:00:00');
var spantime03 = (overDT03 - setDate)/1000;
var spantimes03 = (overDT03 - setDate);
function zero( v ){
	if( v < 10 ){
		return '0'+v;
	}else{
		return v;
	}
}
$( function(){
	
		$(this).everyTime('1s', function(i) {
             spantime01 --;
             var d01 = Math.floor(spantime01 / (24 * 3600));
             var h01 = Math.floor((spantime01 % (24*3600))/3600);
             var m01 = Math.floor((spantime01 % 3600)/(60));
             var s01 = Math.floor(spantime01 %60);

             if(spantime01>0){
                $("#hour01").text(zero(h01+(d01*24)));
                $("#min01").text(zero(m01));
                $("#sec01").text(zero(s01));
             }else{
                $("#hour01").text(zero(0));
                $("#min01").text(zero(0));
                $("#sec01").text(zero(0));
             }
         });
	
		$(this).everyTime('1s', function(i) {
             spantime02 --;
             var d02 = Math.floor(spantime02 / (24 * 3600));
             var h02 = Math.floor((spantime02 % (24*3600))/3600);
             var m02 = Math.floor((spantime02 % 3600)/(60));
             var s02 = Math.floor(spantime02 %60);

             if(spantime02>0){
                $("#hour02").text(zero(h02+(d02*24)));
                $("#min02").text(zero(m02));
                $("#sec02").text(zero(s02));
             }else{
                $("#hour02").text(zero(0));
                $("#min02").text(zero(0));
                $("#sec02").text(zero(0));
             }
         });
		$(this).everyTime('1s', function(i) {
             spantime03 --;
             var d03 = Math.floor(spantime03 / (24 * 3600));
             var h03 = Math.floor((spantime03 % (24*3600))/3600);
             var m03 = Math.floor((spantime03 % 3600)/(60));
             var s03 = Math.floor(spantime03 %60);

             if(spantime03>0){
                $("#hour03").text(zero(h03+(d03*24)));
                $("#min03").text(zero(m03));
                $("#sec03").text(zero(s03));
             }else{
                $("#hour03").text(zero(0));
                $("#min03").text(zero(0));
                $("#sec03").text(zero(0));
             }
         });
		 $(this).everyTime('1ms', function(i) {
             spantimes01 --;
             var ms01 = Math.floor(spantimes01%100);

             if(spantimes01>0){
                $("#msec01").text(zero(ms01));
             }else{
                $("#msec01").text(zero(0));
             }
         });
		$(this).everyTime('1ms', function(i) {
             spantimes02 --;
             var ms02 = Math.floor(spantimes02%100);

             if(spantimes02>0){
                $("#msec02").text(zero(ms02));
             }else{
                $("#msec02").text(zero(0));
             }
         });
		$(this).everyTime('1ms', function(i) {
             spantimes03 --;
             var ms03 = Math.floor(spantimes03%100);

             if(spantimes03>0){
                $("#msec03").text(zero(ms03));
             }else{
                $("#msec03").text(zero(0));
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
						scrollTop: $("#section-02").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
			
			$('#btnBs').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: $("#section-03").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
			
			$('#btnCs').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: $("#section-06").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
			
			
			$('#btnDs').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: $("#section-07").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
			
			
			$('#btnEs').bind('click', function(event) {
					$('html, body').stop().animate({
						scrollTop: $("#section-08").offset().top
					}, 1500, 'easeInOutExpo');
				return false;
			});
		
		});