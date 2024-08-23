document.getElementById('burger-menu').addEventListener('click', function () {
    document.getElementById('side-menu').classList.toggle('-translate-x-full');
});

document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('side-menu').classList.toggle('-translate-x-full');
});


function onScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-right, .slide-left, .zoom-in');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', onScrollAnimation);
window.addEventListener('load', onScrollAnimation);


function onScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', onScrollAnimation);
window.addEventListener('load', onScrollAnimation);