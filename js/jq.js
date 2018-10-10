$(document).ready(function(){

	var $tlo = $("<div class='tlo'></div>");
	var $img = $("<img>");

	$tlo
		.append($img)

	$('body').append($tlo);

	$('#prace img').click(function (e) {
		e.preventDefault();

		var src = $(this).attr("id");
	  console.log(src);

		$img.attr('src',src);

		$tlo.fadeIn(300).show();

		$tlo.click(function () {
			$tlo.fadeOut(300).hide();
		});
	});

function scrollNav() {
	$('#naglowek a').click(function(){

		$('html, body').stop().animate({
				scrollTop: $( $(this).attr('href') ).offset().top-62
		}, 500);
		return false;
	});
}
scrollNav();
});
