$( function(){
			
		<!--(3)側邊選單動態-->
		$('#boxIn').bind('click', function(event) {
				var $anchor = $("#sliderRight");
				$anchor.stop().animate({
					right: 0
				}, 1000, 'easeInOutExpo');
				$(this).css("display","none");
				$("#boxOut").css("display","block");
				event.preventDefault();
		});
		$('#boxOut').bind('click', function(event) {
				var $anchor = $("#sliderRight");
				$anchor.stop().animate({
					right: -300
				}, 1000, 'easeInOutExpo');
				$(this).css("display","none");
				$("#boxIn").css("display","block");
				event.preventDefault();
		});
		    $('#btnTOP').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: 0
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnA').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-04").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnB').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-10").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnC').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-11").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnD').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-12").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			 $('#btnE').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-13").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			 $('#btnF').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-14").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnG').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-15").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnH').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-16").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnI').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-17").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnJ').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-18").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnK').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-19").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnL').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-20").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
			$('#btnM').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $("#section-21").offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});

});