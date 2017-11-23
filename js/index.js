let counter = 0;

$(document).ready(function() {
	$("header button").click(function(){
		$("button").toggleClass("is-active");
		$("ul").removeClass("hidden").toggleClass("animated rotateInDownLeft");
		if(counter === 1){
			$("ul").addClass("animated rotateOutUpLeft");
			counter--;
		}
		else {
			counter++;
			$("ul").toggleClass("animated rotateOutUpLeft");
		}
	});
	/***
		Animations for social
	***/
	$(".icons i").mouseover(function(){
		$(this).addClass("animated bounce");
	});
	$(".icons i").mouseout(function(){
		$(this).removeClass("animated bounce");
	});
});

$(function(){
    $('ul a').click(function (ev){
        $('ul a, .container div').removeClass('active');
        $(ev.target).addClass("active");
        $('#'+ev.target.dataset.panel, '.container')
        .addClass('active animated fadeInUp');
    });    
});
