let ball = document.getElementById('ball');
let court = document.getElementById('court');
let sky = document.getElementById('sky');
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let { scrollY } = window;

    court.style.top = -.3 * scrollY + 'px';
    ball.style.left = 2 * scrollY + 'px';
    sky.style.top = -.3 * scrollY + 'px';
    text.style.top = (120 + -1.5 * scrollY) + 'px';
});