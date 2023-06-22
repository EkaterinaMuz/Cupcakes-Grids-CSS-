const percentage = document.querySelectorAll('.skill__percentage'),
    line = document.querySelectorAll('.skill__line span');

    percentage.forEach((item, i) => {
        line[i].style.width = item.textContent
        console.log(item.innerHTML);
    }); 

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu')
    closeTrigger = document.querySelector('.menu__close');
    overlay = document.querySelector('.menu__overlay'),
    menuItem = document.querySelectorAll('.menu__item');

hamburger.addEventListener('click', openMenu);
closeTrigger.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
window.addEventListener('keydown', (e) => {
    if(e.code === 'Escape') {
        closeMenu();
    }
})

for(item of menuItem) {
    item.addEventListener('click', closeMenu);
}

function openMenu() {
    menu.classList.add('menu_active');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

function closeMenu() {
    menu.classList.remove('menu_active')
    overlay.style.display = 'none';
    document.body.style.overflow = '';
};



const up = document.querySelector('#up');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 1300) {
        up.style.display = 'block'
    } else {
        up.style.display = 'none'
    }
});

up.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

