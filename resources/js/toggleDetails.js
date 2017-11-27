$(document).ready(function(){
	$("#details-toggler").click(function(){
		$("#details").slideToggle();
	  $("#details-toggler").toggleClass('down-arrow up-arrow');
	  $("#details-read").toggleClass('read-less read-more');
	});
});