const close = document.querySelector('.close-icon');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const mq = window.matchMedia( "(max-width: 767px)" );

function handleWidthChange(mq) {
    if (!mq.matches) {
        nav.style.display = 'flex';
        close.hidden = true;
        menuToggle.style.display = 'none';
    }
    else {
        nav.style.display = 'none';
        close.hidden = true;
        menuToggle.style.display = 'block';
    }
}

menuToggle.addEventListener('click', () => {
    nav.style.display = 'block';
    close.hidden = false;
    menuToggle.hidden = true;
});

close.addEventListener('click', () => {
    nav.style.display = 'none';
    close.hidden = true;
    menuToggle.hidden = false;
});

handleWidthChange(mq);
mq.addListener(handleWidthChange);