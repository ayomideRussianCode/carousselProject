'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


// Toggle functionality
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");   
})

document.querySelectorAll(".nav__link")
.forEach(n =>  n.addEventListener("click", () => {

    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
 
}));


// json placeholder

const form = document.getElementById('form');
form.addEventListener('submit', function(e) {

    //auto submission of the  form
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;

    // fetch post request

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
        }),
        headers:{
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
});

// // clear input field






//Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;



const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX (-800px)'
slider.style.overflow = 'visible';

// slides.forEach((s, i) => s.style.transform = 
// `translateX(${100 * i}%)`)

const goToSlide = function(slide) {
    slides.forEach(
     (s, i) => (s.style.transform = 
     `translateX(${100 * ( i - slide)}%)`)
    )
}
goToSlide(0)

//Next slide
const nextSlide = function() {
    if(curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
     curSlide++;
    }
    goToSlide(curSlide)
};
const prevSlide = function() {
    if(curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide)
}
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
