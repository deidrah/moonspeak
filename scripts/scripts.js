$(document).ready(function() {

	$(window).on("scroll touchmove", function () {
  		$('nav').toggleClass('navSmall', $(document).scrollTop() > 500);
  		$('ul').toggleClass('ulSmall', $(document).scrollTop() > 500);
	});


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
});