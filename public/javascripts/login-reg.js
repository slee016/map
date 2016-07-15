$(document).ready(function () {
	$("#loginLink").click(function (event) {
		event.preventDefault();
		$(".overlay").fadeToggle("fast");
	});

	$(".overlayLink").click(function (event) {
		event.preventDefault();
		var action = $(this).attr('data-action');
		$("#loginTarget").load("" + action);
		$(".overlay").fadeToggle("fast");
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27 && $(".overlay").css("display") != "none") {
			event.preventDefault();
			$(".overlay").fadeToggle("fast");
		}
	});
});
