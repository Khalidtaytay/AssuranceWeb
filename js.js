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

let Conseils = document.getElementById('Conseils');
let ConseilsHver = document.getElementById('conseils-hover');
Conseils.addEventListener('mouseenter',()=>{
  ConseilsHver.style.display= 'flex';
});
Conseils.addEventListener('mouseleave',()=>{
  ConseilsHver.style.display= 'none';
});
ConseilsHver.addEventListener('mouseenter',()=>{
  ConseilsHver.style.display= 'flex';
});
ConseilsHver.addEventListener('mouseleave',()=>{
  ConseilsHver.style.display= 'none';
}); 

let conaitre = document.getElementById('nous-conaitre');
let nousConaitreHover = document.getElementById('nous-conaitre-hover');
conaitre.addEventListener('mouseenter',()=>{
  nousConaitreHover.style.display= 'flex';
});
conaitre.addEventListener('mouseleave',()=>{
  nousConaitreHover.style.display= 'none';
});
nousConaitreHover.addEventListener('mouseenter',()=>{
  nousConaitreHover.style.display= 'flex';
});
nousConaitreHover.addEventListener('mouseleave',()=>{
  nousConaitreHover.style.display= 'none';
}); 
//===========================================

let menubar = document.querySelector('.menubar');
let lines = document.querySelector('.lines');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
lines.addEventListener('click', () => {
  if (menubar.style.display === 'flex') {
    menubar.style.transform = 'translateX(100%)';
    line1.style.transform = 'rotate(0deg)';
    line3.style.transform = 'rotate(0deg)';
    line2.style.opacity = 1;
    setTimeout(() => {
      menubar.style.display = 'none';
    }, 300); // Adjust the delay if needed
  } else {
    menubar.style.display = 'flex';
    line1.style.transform = 'translate3d(0,6px,0) rotate(45deg)';
    line3.style.transform = 'translate3d(0,-6px,0) rotate(-45deg)';
    line2.style.opacity = 0;
  }
});

// ===== switch languge=======
let swtch = document.querySelector('.langage-switcher');
let langSwitcher= document.querySelector('.langugeHover');
swtch.addEventListener('click',()=>{
  if(langSwitcher.style.display === 'block'){langSwitcher.style.display = 'none'}else{
    langSwitcher.style.display = 'block'
  }
  event.stopPropagation();
})

  window.addEventListener('click',()=>{
    
    langSwitcher.style.display = 'none'
  })

  let pic1 = document.getElementById('pic1');
  let pic2 = document.getElementById('pic2');
  let pic3 = document.getElementById('pic3');
  
  let pics = [pic1,pic2,pic3];
  let currentIndex = 0;
  let slidepics = setInterval(() => {
    pics.forEach((pic, index) => {
        if (index === currentIndex) {
            pic.style.display = 'flex';
            pic.style.transform = 'translateX(0%)'; // Show the current image
        } else {
            pic.style.display = 'none'; // Hide the other images
            pic.style.transform = 'translateX(100%)'; // Move them off the screen
        }
    });

    currentIndex = (currentIndex + 1) % pics.length; // Update currentIndex for the next iteration
}, 4000);