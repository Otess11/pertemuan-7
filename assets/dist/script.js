const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    const windowposition = window.scrollY;
    navbar.classList.toggle('scrolling-active',windowposition)
})