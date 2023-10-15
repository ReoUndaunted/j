// hamMenu
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamMenuIcon');
  const navItems = document.querySelector('.hamMenu');
  const logoText = document.querySelector('.logoText')

  hamburgerIcon.addEventListener('click', function () {
    navItems.classList.toggle('active');
  });


  hamburgerIcon.addEventListener('click', function () {
    logoText.classList.toggle('active');
  });
});

// hero

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});

// about section

$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});
