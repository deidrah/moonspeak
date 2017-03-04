	var map = document.getElementById('map');

	if (map) {
	var gdansk = {lat: 54.349853, lng: 18.647186};
	var mapa = new google.maps.Map(map, {
		zoom: 16,
		center: gdansk
	});

	var marker = new google.maps.Marker({
		position: gdansk,
		map: mapa,
		icon: 'img/map.png',
	}); 
}