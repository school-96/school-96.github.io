$(document).scroll(function() {
	if ($(document).scrollTop() != 0) {
		$('.parent').css('line-height', '48px');
		$('.about-us-more, .useful-information-more')
			.css('transition', '')
			.css('top', '48px');
	} else {
		$('.parent').css('line-height', '');
		$('.about-us-more, .useful-information-more')
			.css('transition', '.4s all')
			.css('top', '');
	}
});