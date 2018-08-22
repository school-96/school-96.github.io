function noHash(json) {
	json.reverse();

	for (let key in json) {
		let textArr = json[key]['text'].split(' '),
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

		$('.events-container').append(`
			<div class="event">
				<div class="event-img"></div>
				<div class="event-title">${json[key]['title']}</div>
				<div class="event-short-text">${cutText}</div>
				<div class="button">Читати далі</div>
			</div>
		`);
		$('.event-img').eq(key).css('background-image', `url(${json[key]['photo']})`);
		$('.button').eq(key).click(() => {
			location.hash = json[key]['id'];
			location.reload();
		});
	}

	$('.events-title').show();
	$('.events-container').css('display', 'flex');
}

function isHash(json) {
	for (let key in json) {
		if (json[key]['id'] == location.hash.split('#')[1]) {

			$('.events-title').html(json[key]['title']);
			$('.event-view-img').css('background-image', `url(${json[key]['photo']})`);
			$('.events-view-container p').html('&emsp;&emsp;' + json[key]['text']);

			$('.events-title, .events-view-container').show();

			break;
		} else if (key >= json.length - 1) {
			$('.events-title').show();
			$('.events-container').css('display', 'flex');
		}
	}

	$('.btn-large').click(() => {
		location.href = '/events/';
	});
}

function getJSON(callback) {
	$.getJSON('https://school96.000webhostapp.com/events/', json => callback(json));
}

if (!location.hash) {
	getJSON(noHash);
	
} else {
	getJSON(isHash);
}

let oldHash = location.hash;
setInterval(() => {
	if (oldHash != location.hash) {
		location.reload();
	}
}, 1000);