var swiper = new Swiper('.swiper-container', {
   slidesPerView: 3,
   centeredSlides: true,
   spaceBetween: 50,
   initialSlide: 1,
   breakpoints:{
      992:{
         slidesPerView:2,
      },
      768:{
         slidesPerView:1.5,
      },
      576:{
         slidesPerView:1,
      },
      100:{
         slidesPerView:1
      }
   }
 });

 (function(){
    const header = document.querySelector('.header')
    window.onscroll = () => {
       if(window.pageYOffset > 100){
          header.classList.add('js-header')
       } else {
          header.classList.remove('js-header')
       }
    }
 }())