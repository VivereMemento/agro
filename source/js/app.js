'use strict';

require('./_common/slider');
require('./_common/form');
require('./_common/header-animation');
const animatePresentation = require('./_common/animate-presentation');
const animateSolutions = require('./_common/animate-solution');
const animateContacts = require('./_common/animate-contacts');
const animateAbout = require('./_common/animate-about');
const whiteCurtain = document.querySelector('.white-curtain');
const header = document.querySelector('header');
const scrollBtns = document.querySelectorAll('.scroll-btn-js');
const btnUps = document.querySelectorAll('.scroll-btn_up');
let animationDone = false;

btnUps.forEach(btn => btn.addEventListener('click', function () {
    const sections = document.querySelectorAll('section');

    header.style.zIndex = 9999;
    header.classList.remove('hidden');
    setTimeout(() => {
        header.removeAttribute('style');
        sections.forEach(section => section.classList.remove('active'));
    },1000);
}));

scrollBtns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.classList.remove('unhover');
        btn.classList.add('hover');
    });

    btn.addEventListener('mouseout', () => {
        btn.classList.remove('hover');
        btn.classList.add('unhover');
    });
});

document.addEventListener('click', function (e) {

    let startAnimation = null;

    const handleTransitionEnd = function () {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => section.classList.remove('active'));

        whiteCurtain.classList.remove('showed');
        startAnimation();
    };

    function toggleActiveSection(target) {

        return () => {
            whiteCurtain.removeEventListener('transitionend', handleTransitionEnd);

            if (!target.closest('section')) {
                header.classList.add('hidden');
                document.querySelector('section').classList.add('active');
                return false;
            }

            target.closest('section').nextElementSibling.classList.add('active');
        }
    };

    if (e.target.closest('.scroll-btn-js')) whiteCurtain.classList.add('showed');

    if (e.target.closest('#animate-presentation')) {
        startAnimation = toggleActiveSection(e.target);
        whiteCurtain.addEventListener('transitionend', handleTransitionEnd);
        animatePresentation();
    } else if (e.target.closest('#animate-solution')) {
        startAnimation = toggleActiveSection(e.target);
        whiteCurtain.addEventListener('transitionend', handleTransitionEnd);
        animateSolutions();
    } else if (e.target.closest('#animate-contacts')) {
        startAnimation = toggleActiveSection(e.target);
        whiteCurtain.addEventListener('transitionend', handleTransitionEnd);
        animateContacts();
    } else if (e.target.closest('#animate-about')) {
        startAnimation = toggleActiveSection(e.target);
        whiteCurtain.addEventListener('transitionend', handleTransitionEnd);
        animateAbout();
    }


});

