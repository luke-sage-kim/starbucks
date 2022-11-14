const searchEl = document.querySelector('.search');
/*서치를찾는다*/

const searchInputEl = searchEl.querySelector('input');
/*인풋찾기*/

searchEl.addEventListener('click',function (){

  searchInputEl.focus();
});
/*클릭시 함수가 실행되는데 인풋에 포커스해라*/

searchInputEl.addEventListener('focus',function (){

  searchEl.classList.add('focused'); /*특정개체에 add하겠다*/
  searchInputEl.setAttribute('placeholder','통합검색');
}); /*통합검색표시*/


searchInputEl.addEventListener('blur',function (){

  searchEl.classList.remove('focused'); /*특정개체에 add하겠다*/
  searchInputEl.setAttribute('placeholder','');
});/*통합검색감추기*/


const badgeEl = document.querySelector('header .badges');
/* 도큐먼트란html자체다 */
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', _.throttle(function  (){
    console.log(window.scrollY);
    if (window.scrollY>500) {
      //배지숨기기
      //gsap.to(요소,지속시간,옵션 );
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      });
      gsap.to('#to-top', .2, {
        x:0
      }); //버튼보이기!

    } else{
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      
      });
      //배지보이기
      gsap.to('#to-top', .2, {
        x:100
      }); //버튼숨기기!
    }
},300 )); /*스로틀 메소드를 실행한다 (함수,시간) */


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
} );



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  //gsap.to(요소, 지속시간 ,옵션);
  gsap.to(fadeEl, 1, { 
    delay: (index + 1) * .7, //0.7,  1.4 2.1초뒤에 
    opacity: 1
  });

});


//new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이게
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});





const promotionEl = document.querySelector('.promotion'); //프로모션 변수찾아서
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //숨겨져있니/ 안숨겨져있다
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide');
  } else {
      //보임처리!
      promotionEl.classList.remove('hide');
  }

});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
 // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, //선택자
    random(1.5, 2.5), 
    {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 15);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,   //보여짐 여부를 감시할 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();