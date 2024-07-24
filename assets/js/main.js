/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add("show-menu");
    })
}

// Menu Hidden

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD SHADOW HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
