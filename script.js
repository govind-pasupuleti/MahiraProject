const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;
let speed = 2000; // Speed of slide in milliseconds
let interval = setInterval(moveNext, speed);

function updateCarousel() {
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

function moveNext() {
    index = (index + 1) % images.length;
    updateCarousel();
}

function movePrev() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
}

nextBtn.addEventListener('click', () => {
    clearInterval(interval);
    moveNext();
    interval = setInterval(moveNext, speed);
});

prevBtn.addEventListener('click', () => {
    clearInterval(interval);
    movePrev();
    interval = setInterval(moveNext, speed);
});