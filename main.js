let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(this.document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});
