// commented code backup for future references

// const hamburger = document.querySelector(".ham");  
// const mob = document.querySelector(".mob-nav-list");  
// hamburger.addEventListener('click', () => {  
//  hamburger.classList.toggle("change")  
//  mob.classList.toggle("nav-change")  
// });  


// const shippingTitle = document.querySelector(".js-shipping-link");
// const shippingMenu = document.querySelector(".js-shipping");
// shippingTitle.addEventListener('click', () => {
//     shippingMenu.classList.toggle("show");
// });
// const trackingTitle = document.querySelector(".js-tracking-link");
// const trackingMenu = document.querySelector(".js-tracking");
// trackingTitle.addEventListener('click', () => {
//     trackingMenu.classList.toggle("show");
// });
// const businessTitle = document.querySelector(".js-business-link");
// const businessMenu = document.querySelector(".js-business");
// businessTitle.addEventListener('click', () => {
//     businessMenu.classList.toggle("show");
// });
// const supportTitle = document.querySelector(".js-support-link");
// const supportMenu = document.querySelector(".js-support");
// supportTitle.addEventListener('click', () => {
//     supportMenu.classList.toggle("show");
// });

//  for reference in future versions

// const shippingTitle = document.querySelector(".js-shipping-link");
// const shippingMenu = document.querySelector(".js-shipping");
// const trackingTitle = document.querySelector(".js-tracking-link");
// const trackingMenu = document.querySelector(".js-tracking");
// const businessTitle = document.querySelector(".js-business-link");
// const businessMenu = document.querySelector(".js-business");
// const supportTitle = document.querySelector(".js-support-link");
// const supportMenu = document.querySelector(".js-support");


// shippingTitle.addEventListener('click', () => {
//     shippingMenu.classList.toggle("show");
//     trackingMenu.classList.remove("show");
//     businessMenu.classList.remove("show");
//     supportMenu.classList.remove("show");
// });

// trackingTitle.addEventListener('click', () => {
//     trackingMenu.classList.toggle("show");
//     shippingMenu.classList.remove("show");
//     businessMenu.classList.remove("show");
//     supportMenu.classList.remove("show");
// });

// businessTitle.addEventListener('click', () => {
//     businessMenu.classList.toggle("show");
//     supportMenu.classList.remove("show");
//     shippingMenu.classList.remove("show");
//     trackingMenu.classList.remove("show");
// });

// supportTitle.addEventListener('click', () => {
//     supportMenu.classList.toggle("show");
//     businessMenu.classList.remove("show");
//     shippingMenu.classList.remove("show");
//     trackingMenu.classList.remove("show");
// });


// const cat = document.querySelector(".js-link-cat");
// const moveText = document.querySelector(".js-div-move-text");

// cat.addEventListener('mouseOver', () => {
//     alert("hello");
//     moveText.classList.toggle("ex-text-hover");
// });


// const trackBox = document.querySelector(".js-track-package");
// const showTrack = document.querySelector(".js-track-container");

// trackBox.addEventListener('click', () => {
//     showTrack.classList.toggle("js-show-track");
// });

// this was my old code opening box, I'm keeping it here for future reference

// function myFunction() {
//     var x = document.getElementById("container");
//     if (x.style.display === "flex") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "flex";
//     }
//   }

// This is my jQuery code, I'm keeping it here for future reference

  // $(document).ready(function(){
  //   $(".js-track-package").click(function(){
  //     $("#container").slideUp();
  //   });
  //   $(".js-track-package").click(function(){
  //     $("#container").slideDown();
  //   });
  // });
  $(".js-track-package").click(function(){
    $("#container").slideDown();
    $("#container").css('display', 'flex');
  });

const trackBtn = document.querySelector(".track-btn");

trackBtn.addEventListener("click",()=>{
    trackBtn.classList.add("clicked");
})