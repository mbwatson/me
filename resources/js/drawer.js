$(document).ready( () => {
	drawer = $('#drawer');
	$('.drawer-trigger').click(function() {
		drawerContent = $(document.getElementById(this.dataset.drawer)).hide();
		drawer.append(drawerContent);
		drawer.toggleClass('open');
	});
	$(document).keyup((e) => {
		if (e.keyCode == 27) {
			drawer.toggleClass('open');
		}
	});
});
