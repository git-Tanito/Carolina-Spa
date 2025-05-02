// window.swiper = new Swiper({
//   el: ".slider__contenedor", // padre selector
//   slideClass: "slider__slide", // hijo selector
//   createElements: true,
//   autoplay: {
//     // tipo delay
//     delay: 5000,
//   },
//   loop: true, // hace un loop entre las imagenes
//   pagination: true,
//   navigation: true,
// });

let swiper = new Swiper(".swiper", {
  effect: "cube",
  gradCursor: true,
  cubeEffect: {
    shadow: true,
    shadowOffset: 20,
    shadopwScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
