document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }
    showSlide(currentSlide);

    setInterval(nextSlide, 5000); 
});


const botonVerNoticia = document.getElementById('verNoticia');

botonVerNoticia.addEventListener('click', function() {
    const urlNoticia = 'https://www.alharaca.sv/actualidad/cicla-28-un-espacio-que-crea-comunidad/';

    window.open(urlNoticia, '_blank');
});


