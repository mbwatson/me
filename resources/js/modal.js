$(document).ready( function() {
// 	$('.project-card').click(function() {
// 		$("#overlay").fadeIn(250, function() {
// 			$("#modal").appendChild(this.find('.project-details')).slideDown(200);
// 		});
// 	});
	$(document).keydown(function(event) { 
	  if (event.keyCode == 27) { 
			$('.project-details').fadeOut(250, function() {
				$("#overlay").fadeOut(250);
			});
	  } 
	});
});
function openPopup(className) {
	$("#overlay").fadeIn(250, function() {
		$('.' + className).fadeIn();
	});
}
function closePopup() {
	$('.project-details').fadeOut(250);
}
