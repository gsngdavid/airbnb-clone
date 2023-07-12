const navBar = document.getElementById('navigation');

document.addEventListener('scroll', e => {
    if(navBar.offsetTop > 80) {
        navBar.classList.add('shadow-md');
    }
    else {
        navBar.classList.remove('shadow-md');
    }
});