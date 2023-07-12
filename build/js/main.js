const navBar = document.getElementById('navigation');
const switchBtn = document.getElementById('switch');

document.addEventListener('scroll', e => {
    if(navBar.offsetTop > 80) {
        navBar.classList.add('shadow-md');
    }
    else {
        navBar.classList.remove('shadow-md');
    }
});

switchBtn.addEventListener('click', e => {
    switchBtn.firstElementChild.classList.toggle('switchOn');
    switchBtn.classList.toggle('bg-black');
    switchBtn.classList.toggle('bg-[#717171]');
});