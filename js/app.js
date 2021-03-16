const hamburger = document.querySelector('.header .nav_bar .nav_list .hamburger');
const mobile_menu = document.querySelector('.header .nav_bar .nav_list ul');
const header = document.querySelector('.header .container');
hamburger/addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})
