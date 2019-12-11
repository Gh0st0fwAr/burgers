
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const cross = document.getElementById('cross');
const menuLinks = document.querySelectorAll('#navLink');



menu.addEventListener("click", function(e) {
    event.preventDefault();

    $(nav).appendTo(".wrapper");
    nav.style.display = "flex";
    cross.style.display = "unset";
    document.body.style.overflow = 'hidden';
})

menuLinks.forEach(function(elem){
    
    elem.addEventListener('click' , function(e){ 
    e.preventDefault();   
    nav.style.display = "none";
    cross.style.display = "none";
    document.body.style.overflow = 'unset';
    })
})


cross.addEventListener("click", function(e) {
    event.preventDefault();

    nav.style.display = "none";
    cross.style.display = "none";
    document.body.style.overflow = 'unset';
})


