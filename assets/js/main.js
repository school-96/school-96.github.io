// var justVar = '',
// 	keyDownAllow = true;
// $(document).keydown(function(e) {
// 	if (e.keyCode == 13) {
// 		keyDownAllow = false;
// 		$.post('../root/php/entryAdmin.php', {justData: justVar},
// 			function(data) {
// 				if (data) {
// 					$('body *').remove();
// 					$('body')
// 						.css('background-image', 'none')
// 						.append('<h1 class="admin-title">Панель адміна</h1>' + 
// 							'<div class="admin-events">Події</div>' +
// 							'<br><br>' +
// 							'<div class="admin-guestbook">Гостьова книга</div>' +
// 							'<div class="back-btn">Назад</div>');

// 					$('.admin-guestbook').click(function() {
// 						$('.admin-events, .admin-guestbook').hide();
// 						$('.back-btn').show();

// 						$.post('../root/php/getGuestbook.php', {
// 							justData: justVar
// 						}, function(data) {
// 							data = JSON.parse(data);
// 							for (var key in data) {
// 								$('body').append('<blockquote>' +
// 									'<p>' + data[key]['text'] + '</p>' +
// 									'<div>— <cite>' + data[key]['name'] + '</cite></div>' +
// 									'</blockquote>');
// 							}
// 						});

// 						$('.back-btn').click(function() {
// 							$('blockquote').remove();
// 							$('.back-btn').hide();
// 							$('.admin-events, .admin-guestbook').show();
// 						});
// 					});

// 					$('.admin-events').click(function() {
// 						$('.admin-events, .admin-guestbook').hide();
// 						$('.back-btn').show();

// 						$('body')
// 							.append('<div class="admin-add-events">Додати подію</div>' +
// 								'<br><br>' +
// 								'<div class="admin-del-events">Видалити подію</div>');



// 						$('.back-btn').click(function() {
// 							$('.back-btn').hide();
// 							$('.admin-add-events, .admin-del-events').hide();
// 							$('.admin-events, .admin-guestbook').show();

// 						});
// 					});

// 				} else {
// 					keyDownAllow = true;
// 					justVar = '';
// 				}
// 			}
// 		);
// 	} else if (keyDownAllow) {
// 		justVar += String.fromCharCode(e.keyCode);
// 	}
// });





let announcementBtnClick,
	uppered;

scrollAudit();
function scrollAudit() {
	if ($(document).scrollTop() >= 450) {
		$('.features-container').css('opacity', 1);
	}
	
	if ($(document).scrollTop() >= 600) {
		$('.announcement-btn, .announcement-text').css('opacity', 0);
		setTimeout(function() {
			$('.announcement-btn, .announcement-text').css('display', 'none');
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
$(document).scroll(function() {
	scrollAudit();
});

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

// Last three events >
$.getJSON('https://school96.000webhostapp.com/assets/json/events.json', json => {
	json = JSON.parse(json);
	console.log(data[0]['title']);
	let eq = 0;
	for (var key in data) {
		$('.event-img').eq(eq).css('background-image', 'url(' + data[key]['photo'] + ')');
		$('.event-title').eq(eq).html(data[key]['title']);
		$('.event-short-text').eq(eq).html(data[key]['cut_text']);
		$('.btn').eq(eq).addClass(data[key]['id']);
		eq++;
	}
	for (var key in data) {
		console.log(data[key]['photo']);
		console.log(data[key]['title']);
		console.log(data[key]['cut_text']);
	}
});

$('.btn').click(function() {
	location.href = '/events/#' + $(this).attr('class').split(' ')[1];
});
// < Last three events