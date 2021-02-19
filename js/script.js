var swiper = new Swiper('.swiper-container', {
   slidesPerView: 3,
   centeredSlides: true,
   spaceBetween: 50,
   initialSlide: 1,
   breakpoints:{
      1440:{
         slidesPerView:3,
      },
      1023:{
         slidesPerView:2,
      },
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

 (function(){
   const burgerItem = document.querySelector('.burger')
   const menu = document.querySelector('.header__nav')
   const menuCloseItem = document.querySelector('.header__nav-close')
   const menuLinks = document.querySelectorAll('.header__link')

   burgerItem.addEventListener('click', () => {
       menu.classList.add('header__nav_active')
   })

   menuCloseItem.addEventListener('click', () =>{
       menu.classList.remove('header__nav_active')
   }) 

   if(window.innerWidth < 768){
       menuLinks.forEach(item =>{
           item.addEventListener('click', ()=>{
               menu.classList.remove('header__nav_active')
           })
       })
   }
}());