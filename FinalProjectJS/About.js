function big(element) {
	if ($(window).width() > 700) {
		element.style.fontSize = '25px';
	}
}

function small(element) {
	if ($(window).width() > 700) {
		element.style.fontSize = '20px';
	}
}

function load() {
	$("body").animate({opacity: '1'}, 1000);
}

function borderAppear(element) {
	element.style.border = "solid black 1px";
}

function borderDisappear(element) {
	element.style.border = "solid black 0px"
}