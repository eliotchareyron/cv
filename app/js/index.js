// listen for scroll
var positionElementInPage = $('#header').offset().top;
$(window).scroll(
	function() {
		if ($(window).scrollTop() &gt;= positionElementInPage) {
			// fixed
			$('#nav').addClass("floatable");
		} else {
			// relative
			$('#nav').removeClass("floatable");
		}
	}
);