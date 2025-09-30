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

// Parallax effect
document.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  const bg = document.querySelector(".parallax-bg");
  if (bg) {
    bg.style.backgroundPosition = `center ${scrolled * -0.2}px`;
  }
});

// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});




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


// interactive section
(function () {
  // Scoped selectors for safety
  const items = document.querySelectorAll('.srv-item');

  function setActive(targetItem) {
    items.forEach(it => {
      const circle = it.querySelector('.srv-circle');
      const tag = it.querySelector('.srv-tag');
      const isActive = (it === targetItem);

      if (isActive) {
        it.classList.add('active');
        if (circle) circle.setAttribute('aria-expanded', 'true');
        if (tag) tag.setAttribute('aria-hidden', 'false');
      } else {
        it.classList.remove('active');
        if (circle) circle.setAttribute('aria-expanded', 'false');
        if (tag) tag.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Initialize (first item remains active by default)
  // but ensure aria states are correct on load
  if (items.length) {
    const defaultActive = document.querySelector('.srv-item.active') || items[0];
    setActive(defaultActive);
  }

  // click + keyboard (Enter/Space) handling
  items.forEach(item => {
    const circle = item.querySelector('.srv-circle');
    if (!circle) return;

    circle.addEventListener('click', () => setActive(item));
    circle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setActive(item);
      }
    });
  });

})();
// ends






