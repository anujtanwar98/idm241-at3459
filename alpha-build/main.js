const hamburger = document.querySelector(".ham");  
const mob = document.querySelector(".mob-nav-list");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 mob.classList.toggle("nav-change")  
});  


