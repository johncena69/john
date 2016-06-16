
$(document).ready(function () {

	var toOpen = "#introduction";
	var toClose;
	function welcomeText() {
		if (parseInt($(".welcome").css("fontSize")) < 30) {
			$(".welcome").css({ "font-size": "30px" });
		}
	}
	welcomeText();

	$(window).resize(function () {
		welcomeText();
	});

	$(".start").click(function () {
		$("body").children().fadeOut(500);
		$('<iframe src="home.html" frameBorder="0"></iframe>')
			.appendTo("body").fadeIn(500);

		// 	$("#landing").transition({
		// 		opacity: 0
		// 	}, 500, function () {
		// 		$("#landing").css("display", "none");
		// $("#wrapper").show();
		// 	});
		// $("#wrapper").transition({
		// 	opacity: 1
		// }, 500, function () {
		// $("#wrapper").css("display", "default");
		// });
		// $("#wrapper").css("opacity", "1");
		// $("#landing").css("display", "none");
		// window.location.replace("home.html");
		// window.location.href = "home.html";
		// var calcTop = parseInt($("#header").outerHeight());

		// $(".logo").transition({
		// 	top: "17px",
		// 	"max-height": parseInt(calcTop - 4) + "px"
		// }, 1000, open);

		// $(".menus").css("top", parseInt(calcTop + 30) + "px");

		// $("#header").transition({
		// 	"opacity": "0.9"
		// }, 1000);

		// $(".welcome").transition({
		// 	"opacity": "0"
		// }, 1000);

		// $(".start").transition({
		// 	"opacity": "0"
		// }, 1000);
	})

	var open = function () {
		toClose = toOpen;
		$(toOpen).css("z-index", "5");
		$(toOpen).transition({
			opacity: 1,
		}, 500, function () {
		});
	};

	var close = function () {
		$(toClose).transition({
			opacity: 0,
		}, 500, function () {
			$(toClose).css("z-index", "-1");
			open();
		});
	}

	$("#introButton").click(function () {
		toOpen = "#introduction";
		if (toClose !== toOpen) {
			close();
		}
	})

	$("#portfButton").click(function () {
		toOpen = "#portf";
		if (toClose !== toOpen) {
			close();
		}
	})

	$("#musicButton").click(function () {
		toOpen = "#music";
		if (toClose !== toOpen) {
			close();
		}
	})

	$("#contactButton").click(function () {
		toOpen = "#contact";
		if (toClose !== toOpen) {
			close();
		}
	})
	var fileName = "../resume.pdf";
	$("#resume").click(function () {
		$("#dialog").dialog({
			modal: true,
			title: "Resume",
			width: 640,
			height: 750,
			buttons: {
				Close: function () {
					$(this).dialog('close');
				}
			},
			open: function () {
				var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"600px\" height=\"600px\">";
				object += "If you are unable to view file, you can download from <a href = \"{FileName}\">here</a>";
				object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
				object += "</object>";
				object = object.replace(/{FileName}/g, fileName);
				$("#dialog").html(object);
			}
		});
	})
})