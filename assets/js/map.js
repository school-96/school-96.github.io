function initMap() {
	var myLatLng = {lat: 49.800498, lng: 24.054980};

	var map = new google.maps.Map(document.querySelector(".map"), {
		center: myLatLng,
		// mapTypeId: "satellite",
		zoom: 15
	});

	var marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		title: "Школа №96"
	});
}