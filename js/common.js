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


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
//연도 보여주는거