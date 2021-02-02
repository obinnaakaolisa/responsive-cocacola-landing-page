/*Initialize Swiper*/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '2',
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop:true
  });

  function toggleMenu() {
      const toggler = document.querySelector('.toggler');
      const navigation = document.querySelector('.navigation');
      toggler.classList.toggle('active');
      navigation.classList.toggle('active');
  }