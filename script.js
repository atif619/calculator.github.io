let toggle = document.querySelector('.toggle');
let container = document.querySelector('.container');
let shoeAnswer = document.querySelector('#showAnswer');
let btn = document.querySelector('.btn');
toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    container.classList.toggle('active');
    showAnswer.classList.toggle('active');
    btn.classList.add('active');
})