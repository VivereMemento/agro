const animateAbout = function () {
    const about = document.querySelector('.about');
    const dots = about.querySelector('.dots');
    const textWrap = about.querySelector('.about__content-text');
    const text = about.querySelector('.about__content-text p');
    const tl = new TimelineMax();

    tl
        .fromTo(dots, 1.5, {y:-1000}, {y:0, delay: 0.5, ease: Sine.easeOut})
        .fromTo(textWrap, 1.5, {x:-1500}, {x:0, delay: 0.5, ease: Sine.easeOut}, '-=1.5')
        .fromTo(text, 1.5, {x:-1500}, {x:0, delay: 0.5, ease: Sine.easeOut}, '-=2')

};

module.exports = animateAbout;