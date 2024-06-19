const swiper = new Swiper('.swiper', {
    // Paramètres optionnels
    direction: 'horizontal',
    loop: true,
  
    // Flèches de navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // ScrollBar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });