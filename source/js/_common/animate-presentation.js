const animatePresentation = function () {
    const presentation = document.querySelector('.presentation');
    const imgWrap = presentation.querySelector('.presentation__img-wrap');
    const scrollBtn = presentation.querySelector('.presentation .scroll-btn_black');
    const scrollBtnAnimation = function() {

        const tl = new TimelineMax({
            onComplete: deletingStyleAttr
        });
        const circleBig = scrollBtn.querySelector('.scroll-btn__circles-big');
        const circleSmall = scrollBtn.querySelector('.scroll-btn__circles-small');
        tl
            .set(circleBig,{y:500})
            .set(circleSmall,{y:500})
            .to(scrollBtn, 1.5, {y:0, ease: Sine.easeOut}, '-=1')
            .to(circleBig, 1, {y:0, ease: Back.easeOut.config(1)})
            .to(circleSmall, 1, {y:0, ease: Back.easeOut.config(1)});

        function deletingStyleAttr() {
            scrollBtn.removeAttribute('style');
            circleBig.removeAttribute('style');
            circleSmall.removeAttribute('style');
        };
    };
    const tl = new TimelineMax({
        onComplete: scrollBtnAnimation
    });

    tl
        .set(scrollBtn,{y:1000})
        .fromTo(imgWrap , 2, {y:1000}, {y:0, ease: Expo.easeInOut,})
};


module.exports = animatePresentation;