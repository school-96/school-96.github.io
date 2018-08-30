// EXIT TO ADMIN WITH KEYBOARD TYPE
let type = '';
$(document).keydown(e => {
	if (e.keyCode == 13) {
		if (type == 'ADMINKA') {
			location.href = 'https://school96.000webhostapp.com/';
		} else type = '';
	} else type += String.fromCharCode(e.keyCode);
});


let announcementBtnClick,
	uppered;

scrollAudit();
function scrollAudit() {
	if ($(document).scrollTop() >= 450) {
		$('p.features-title, .features-container').css('opacity', 1);
	}
	
	if ($(document).scrollTop() >= 600) {
		$('.announcement-btn, .announcement-text').css('opacity', 0);
		setTimeout(function() {
			$('.announcement-btn, .announcement-text').hide();
		}, 1600);
	}

	if ($(document).scrollTop() >= 3200) {
		if (!uppered) {
			uppered = true;

			let upperData = {
				delay: 1,
				time: 300
			};
			$('.live-number-1').counterUp(upperData);
			$('.live-number-2').counterUp(upperData);
			$('.live-number-3').counterUp(upperData);
		}
	}

	$('.info-full-1, .info-full-2, .info-full-3').hide(800);
}
$(document).scroll(scrollAudit);

function closeAnnouncement() {
	if (announcementBtnClick) {
		$('.announcement-btn, .announcement-text').css('opacity', 0);
		setTimeout(function() {
			$('.announcement-btn, .announcement-text').css('display', 'none');
		}, 1600);
	}
}

$('.announcement-btn, .announcement-text').click(function() {
	$('.announcement-text').css('left', 0);
	$('.announcement-btn')
		.css('left', '317.82px')
		.css('cursor', 'default');
		setTimeout(function() {
			$('.announcement-btn').css('background-color', 'transparent');
		}, 1600);
	$('.announcement-btn i')
		.removeClass('fa-exclamation-circle')
		.addClass('fa-times')
		.css('cursor', 'pointer');
	$('.fa-times').click(function() {
		closeAnnouncement();
	});
	announcementBtnClick = true;
	return false;
});



$('.info-btn-1').click(function() {
	$('.info-full-1').show(900);
	$('.info-full-2, .info-full-3').hide(800);
});

$('.info-btn-2').click(function() {
	$('.info-full-2').show(900);
	$('.info-full-1, .info-full-3').hide(800);
});

$('.info-btn-3').click(function() {
	$('.info-full-3').show(900);
	$('.info-full-1, .info-full-2').hide(800);
});

$('.info-btn-1, .info-btn-2, .info-btn-3, .info-full-1, .info-full-2, .info-full-3')
	.click(function() {
		return false;
	});

$(document).click(function() {
	$('.info-full-1, .info-full-2, .info-full-3').hide(800);
	closeAnnouncement();
});


// GET LAST THREE EVENTS
$.getJSON('https://school96.000webhostapp.com/events/', json => {
	for (let i = 1; i <= 3; i++) {
		let num = json.length - i,
			textArr = json[num]['text'].split(' '),
			capacity = 0,
			cutText = '';

		for (let key in textArr) {
			capacity += textArr[key].length + 1;

			if (capacity >= 235) {
				cutText += '...';
				break;
			}
			cutText += textArr[key] + ' ';
		}

		$('.event-img').eq(i - 1).css('background-image', 'url(' + json[num]['photo'] + ')');
		$('.event-title').eq(i - 1).html(json[num]['title']);
		$('.event-short-text').eq(i - 1).html(cutText);
		$('.button').eq(i - 1).click(() => {
			location.href = '/events/#' + json[num]['id'];
		});
	}
});