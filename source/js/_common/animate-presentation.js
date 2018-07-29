const  scrollBtnAnimation = require('./header-animation');
const whiteCurtain = document.querySelector('.white-curtain');
const header = document.querySelector('header');
const presentation = document.querySelector('.presentation');
const imgWrap = document.querySelector('.presentation__img-wrap');
const scrollBtn = presentation.querySelector('.presentation .scroll-btn_black');
let animationDone = false;


const animatePresentation = function () {
    const tl = new TimelineMax({
        onComplete: scrollBtnAnimation(scrollBtn)
    });

    tl
        .set(scrollBtn,{y:1000})
        .fromTo(imgWrap , 2, {y:1000}, {y:0, ease: Expo.easeInOut,})
};

document.addEventListener('click', function (e) {
    whiteCurtain.classList.add('showed');

    whiteCurtain.addEventListener('transitionend', function () {
        presentation.classList.add('active');
        whiteCurtain.classList.remove('showed');
        header.classList.add('hidden');
    });

    if (e.target.closest('#animate-presentation')) {
        animatePresentation();
    }
});