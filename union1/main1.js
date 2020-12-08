 const parallax = document.querySelectorAll(".section1");
        window.addEventListener("scroll", function() {
            let offset = window.pageYOffset;
            parallax.forEach(function(prllx, i) {
                console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
                prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
            })
        })

      var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoHeight: true
		});
	};
	testimonialCarousel();