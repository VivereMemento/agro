const animateSolutions = function () {
    const solutions = document.querySelector('.solutions');
    const dots = solutions.querySelector('.dots');
    const menu = solutions.querySelector('.solutions__menu');
    const slider = solutions.querySelector('.solutions__slider');


    const tl = new TimelineMax();

    tl
        .fromTo(solutions , 2, {opacity:0}, {opacity:1, ease: Expo.easeInOut,})
        .fromTo(dots, 1.5, {y:-1000}, {y:0, delay: 0.5, ease: Sine.easeOut}, '-=1')
        .fromTo(menu, 1.5, {y:-1000}, {y:0, delay: 0.5, ease: Sine.easeOut}, '-=2')
        .fromTo(slider, 1.5, {y:1000}, {y:0, delay: 0.5, ease: Sine.easeOut}, '-=1.3');
};

module.exports = animateSolutions;