'use strict';

require('./_common/slider');
require('./_common/form');
require('./_common/header-animation');
require('./_common/animate-presentation');
require('./_common/animation-solution');

const scrollBtns = document.querySelectorAll('.scroll-btn');
const btnUp = document.querySelector('.scroll-btn_up');

btnUp.addEventListener('click', function () {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');

    header.classList.remove('hidden');
    sections.forEach(section => section.classList.remove('active'));
});

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



