const logo = document.querySelector('.logo_js');
const heading = document.querySelector('.header__heading');
const openFormBnt = document.querySelector('#open-form');
const scrollBtn = document.querySelector('.scroll-btn');

const scrollBtnAnimation = function(elem) {

    return function () {
        const tl = new TimelineMax({
            onComplete: deletingStyleAttr
        });
        const scrollBtn = elem;
        const circleBig = scrollBtn.querySelector('.scroll-btn__circles-big');
        const circleSmall = scrollBtn.querySelector('.scroll-btn__circles-small');
        tl
            .set(circleBig,{y:500})
            .set(circleSmall,{y:500})
            .to(scrollBtn, 1.5, {y:0, ease: Sine.easeOut}, '-=1.1')
            .to(circleBig, 0.5, {y:0, ease: Back.easeOut.config(1)})
            .to(circleSmall, 0.5, {y:0, ease: Back.easeOut.config(1)});

        function deletingStyleAttr() {
            scrollBtn.removeAttribute('style');
            circleBig.removeAttribute('style');
            circleSmall.removeAttribute('style');
        };
    }
};

const tl = new TimelineMax({
    onComplete: scrollBtnAnimation(scrollBtn)
});

tl
    .set(scrollBtn,{y:1000})
    .fromTo(logo, 1.5, {y:-1000}, {y:0, delay: 0.5, ease: Sine.easeOut})
    .fromTo(heading, 1.5, {y:1000}, {y:0, ease: Sine.easeOut}, '-=0.5')
    .fromTo(openFormBnt, 1.5, {y:1000}, {y:0, ease: Sine.easeOut}, '-=1');

module.exports = scrollBtnAnimation;