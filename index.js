const menuBtns = document.querySelectorAll(".menu-btn");
const navlinks = document.querySelector(".sidebar");
menuBtns.forEach(menuBtn =>{
    menuBtn.addEventListener("click",()=>{
        navlinks.classList.toggle("mobile-menu");
    });
});