document.addEventListener('DOMContentLoaded', function () {


  // SLIDER
  var carouselslider = new Swiper('.carousel-slider', {
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });


  //TimeLine

  const dateLinks = document.querySelectorAll('#dates a');
  const issues = document.querySelectorAll('#issues .issue');
  
  dateLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
  
      // Quitar selección actual
      dateLinks.forEach(l => l.classList.remove('selected'));
      issues.forEach(issue => issue.classList.remove('selected'));
  
      // Añadir selección nueva
      link.classList.add('selected');
      const id = link.getAttribute('data-id');
      document.getElementById(id).classList.add('selected');
    });
  });
  
  
});
