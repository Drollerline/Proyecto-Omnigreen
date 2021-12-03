
navigator.geolocation.getCurrentPosition(function (position) {
	var map = L.map('map').setView([position.coords.latitude,position.coords.longitude], 13);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1IjoiZGF2aWRidWJ1Y29kZWFuZG8iLCJhIjoiY2t3MndzamFtMjA0MzJvcGF3Z2I2YXpoaiJ9.Zko2X75ycmB8q214NbMBXg'
	}).addTo(map);
	var marker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(map);
})
