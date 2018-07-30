const animateContacts = function () {
    const contacts = document.querySelector('.contacts');
    const dot = contacts.querySelector('.contacts__dot');
    const dotText = dot.querySelector('.contacts__dot-text');
    const map = contacts.querySelector('.contacts__map');
    const text = contacts.querySelector('.contacts__text');
    const frame = contacts.querySelector('.contacts__frame');

    const tl = new TimelineMax();

    tl
        .fromTo(dot, 1.5, {y:-1000}, {y:0, ease: Sine.easeOut})
        .fromTo(dotText, 1.5, {x:1000}, {x:0, ease: Sine.easeOut}, '-=0.5')
        .fromTo(map, 1.5, {x:1500}, {x:0, ease: Sine.easeOut}, '-=0.5')
        .fromTo(text, 1.5, {x:-1000}, {x:0, ease: Sine.easeOut}, '-=1')
        .fromTo(frame, 1.5, {x:-1000}, {x:0, ease: Sine.easeOut}, '-=1.8');
};

module.exports = animateContacts;