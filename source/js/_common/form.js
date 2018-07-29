const form = document.querySelector('.form');
const formOpen = document.querySelector('#open-form');
const formClose = document.querySelector('.form__close');
formOpen.addEventListener('click', toggleForm);
formClose.addEventListener('click', toggleForm);

function toggleForm() {
    console.log('hello');
    form.classList.toggle('active');
};



module.exports = toggleForm;