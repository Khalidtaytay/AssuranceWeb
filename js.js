let swiper1=document.querySelector('swiper01');
let swiper2=document.querySelector('swiper02');
const swiper = new Swiper('.swiper01', {
  // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});
const swiper02 = new Swiper('.swiper02', {
  // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});
//======================================================
let offres = document.getElementById('offres');
let offresHover = document.getElementById('offres-hover');
offres.addEventListener('mouseenter',()=>{
  offresHover.style.display= 'flex';
});
offres.addEventListener('mouseleave',()=>{
  offresHover.style.display= 'none';
});

offresHover.addEventListener('mouseenter',()=>{
  offresHover.style.display= 'flex';
})
offresHover.addEventListener('mouseleave',()=>{
  offresHover.style.display= 'none';
})

let devis = document.getElementById('devis');
let devissHover = document.getElementById('devis-hover');
devis.addEventListener('mouseenter',()=>{
  devissHover.style.display= 'flex';
});
devis.addEventListener('mouseleave',()=>{
  devissHover.style.display= 'none';
});
devissHover.addEventListener('mouseenter',()=>{
  devissHover.style.display= 'flex';
});
devissHover.addEventListener('mouseleave',()=>{
  devissHover.style.display= 'none';
});

let declarezDevis = document.getElementById('declarez-devis');
let declarezDevisHover = document.getElementById('declarez-devis-hover');
declarezDevis.addEventListener('mouseenter',()=>{
  declarezDevisHover.style.display= 'flex';
});
declarezDevis.addEventListener('mouseleave',()=>{
  declarezDevisHover.style.display= 'none';
});
declarezDevisHover.addEventListener('mouseenter',()=>{
  declarezDevisHover.style.display= 'flex';
});
declarezDevisHover.addEventListener('mouseleave',()=>{
  declarezDevisHover.style.display= 'none';
});
//===========================================

let menubar = document.querySelector('.menubar');
let lines = document.querySelector('.lines');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
lines.addEventListener('click', () => {
  if (menubar.style.display === 'flex') {
    menubar.style.display = 'none';
    menubar.style.transform = 'translateX(100%)';
  } else {
    menubar.style.display = 'flex';
    menubar.style.transform = 'translateX(0)';
  }
  line1.style.transform = 'rotateX(180deg)';
});