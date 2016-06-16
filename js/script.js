
$(document).ready(function () {

	var easter_egg = new Konami();
	easter_egg.code = function () {
		$('<iframe src="https://www.youtube.com/embed/4k1xY7v8dDQ?autoplay=1&loop=1" frameBorder="0"></iframe>')
			.appendTo("body").fadeIn(10);
	}
	easter_egg.load();

	window.addEventListener("beforeunload", function (e) {
		// while (1<1000){
		// 	alert("JOHN CENA");
		// }
		var confirmationMessage = 'JOHN CENA';

		(e || window.event).returnValue = confirmationMessage; //Gecko + IE
		return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
	});

})