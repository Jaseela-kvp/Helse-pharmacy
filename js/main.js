(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

   

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    // icons click
// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

// Interactive section
document.querySelectorAll(".circle-icon").forEach(icon => {
    icon.addEventListener("click", () => {
      document.querySelectorAll(".circle-icon").forEach(i => i.classList.remove("active"));
      icon.classList.add("active");

      document.getElementById("approach-title").innerText = icon.getAttribute("data-title");
      document.getElementById("approach-desc").innerText = icon.getAttribute("data-text");
    });
  });
// Interactive section ends


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });



    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

// navbar
document.addEventListener("DOMContentLoaded", function() {
    // Get all navbar links
    var navLinks = document.querySelectorAll('.nav-item');

    // Close the navbar when a link is clicked
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            // Check if navbar is collapsed (only in mobile view)
            var navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                // Close the navbar
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

// gallery






