var ar1 = document.querySelector('.ar1');
var ar2 = document.querySelector('.ar2');
var ar3 = document.querySelector('.ar3');
var ar4 = document.querySelector('.ar4');
var a = document.querySelector('#svg');
const anchors = document.querySelectorAll('a[href*="#"]');
const nav = document.querySelector('#nav');

for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


function animate(ar, time) {
  setTimeout(()=> {
    ar.style.fill = 'white';
  setTimeout(()=>{ar.style.fill = 'rgba(1, 1, 1, 0.3)';}, 200);
  }, time)

};

window.addEventListener('load', ()=> {
  a.classList.add("animateSvg");
  setInterval(()=> {
  animate(ar1, 200);
  animate(ar2, 400);
  animate(ar3, 600);
  animate(ar4, 800);
}, 800)
});

var lastScroll = Math.round(window.scrollY);

const stickNav = _.throttle(() => {
  var scroll = Math.round(window.scrollY);

  if(scroll > lastScroll) {
    nav.classList.add('sticky');
  }
  else if (scroll < lastScroll) {
    nav.classList.remove('sticky');
  }
  lastScroll = Math.round(window.scrollY);
}, 300);

window.addEventListener('scroll', stickNav);
