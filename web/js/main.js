$(function() {
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 100
	});
	
	// Collapse Navbar
	var navbarCollapse = function() {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-convert");
			$("#brand-logo").attr("src", "img/stripes.png");
		} else {
			$("#mainNav").removeClass("navbar-convert");
			$("#brand-logo").attr("src", "img/stripes-white.png");
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);
});