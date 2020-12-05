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

function popup() {
	var btn = document.getElementById("log_in").innerHTML;
	if (btn == "Log In") {
		document.querySelector(".popup").style.display = "flex";
		$(".popup").animate({opacity: '1'}, 1000);
		document.body.style.overflow = "hidden";
	}
	else {
		logout();
	}
}

function close_popup() {
	document.querySelector(".popup").style.display = "none";
	$(".popup").animate({opacity: '0'}, 1000);
	document.body.style.overflow = "scroll";
	document.getElementById("user_name").value = "";
	document.getElementById("pass").value = "";
}

function login(name) {
	document.querySelector(".user_profile").style.display = "inline";
	document.getElementById("username").innerHTML = name;
	document.getElementById("log_in").innerHTML = "Log Out";
	close_popup();
}

function logout() {
	document.querySelector(".user_profile").style.display = "none";
	document.getElementById("log_in").innerHTML = "Log In";
}