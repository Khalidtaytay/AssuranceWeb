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
    el: '.swiper-pagination02',
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