function load() {
	$("body").animate({opacity: '1'}, 1000);
}

function big(element) {
	if ($(window).width() > 700) {
		element.style.fontSize = '25px';
	}
	else {
		element.style.fontSize = '35px';
	}
}

function small(element) {
	if ($(window).width() > 700) {
		element.style.fontSize = '20px';
	}
	else {
		element.style.fontSize = '35px';
	}
}

function borderAppear(element) {
	element.style.border = "solid black 3px";
}

function borderDisappear(element) {
	element.style.border = "solid black 0px"
}

function initMap() {
	var options = {
		center: {lat: 35.652832, lng: 139.839478},
		zoom: 10
	}

	var map = new google.maps.Map(document.getElementById("Map"), options);

	var icon1 = {
		url: "https://pbs.twimg.com/media/Dlp-YhjW0AABV6t.png",
		scaledSize: new google.maps.Size(50, 50),
	};
	var marker1 = new google.maps.Marker({
		position: {lat: 35.71056803464863, lng: 139.81191282620964}, 
		map: map,
		icon: icon1
	});
	var infoWindow1 = new google.maps.InfoWindow({
		content: "Kirby Cafe, which is praised for its atmosphere and delicious foods!"
	});
	marker1.addListener("click", () => {
		infoWindow1.open(marker1.get("Map"), marker1);
	});

	var icon2 = {
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Nintendo_Logo_2017.png/640px-Nintendo_Logo_2017.png",
		scaledSize: new google.maps.Size(50, 50),
	};
	var marker2 = new google.maps.Marker({
		position: {lat: 35.66284831191932, lng: 139.69859558465632},
		map: map,
		icon: icon2
	});
	var infoWindow2 = new google.maps.InfoWindow({
		content: "Nintendo Tokyo Store, which not only features many Kirby products, but also many other Nintendo merchandises!"
	});
	marker2.addListener("click", () => {
		infoWindow2.open(marker2.get("Map"), marker2);
	});

	var icon3 = {
		url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/HAL_Laboratory_logo.png/220px-HAL_Laboratory_logo.png",
		scaledSize: new google.maps.Size(50, 50),
	};
	var marker3 = new google.maps.Marker({
		position: {lat: 35.69330777041161, lng: 139.76331622435762},
		map: map,
		icon: icon3
	});
	var infoWindow3 = new google.maps.InfoWindow({
		content: "The Headquarters of HAL Laboratory, the company that works on Kirby!"
	});
	marker3.addListener("click", () => {
		infoWindow3.open(marker3.get("Map"), marker3);
	});
}
