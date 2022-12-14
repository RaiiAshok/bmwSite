// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    // auto play the carousel
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // side indicators buttons
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
    

// test file

const firstIndicator = document.querySelectorAll(".first-indicator");
const secondIndicator = document.querySelectorAll(".second-indicator");
const thirdIndicator = document.querySelectorAll(".third-indicator");
const first = document.querySelectorAll(".first");
const second = document.querySelectorAll(".second");
const third = document.querySelectorAll(".third");

for(let i = 0; i < first.length; i++){
    
    firstIndicator[i].addEventListener('click', function slideChange(){
        if(first[i].style.display == "none"){
            first[i].style.display = "block";
        }
        second[i].style.display = "none";
        third[i].style.display = "none";
        
    });
    secondIndicator[i].addEventListener('click', function slideChange(){
    if(second[i].style.display == "none"){
        second[i].style.display = "block";
    }
    first[i].style.display = "none";
    third[i].style.display = "none";
    
})
thirdIndicator[i].addEventListener('click', function slideChange(){
    if(third[i].style.display == "none"){
        third[i].style.display = "block";
    }
    first[i].style.display = "none";
    second[i].style.display = "none";
    
}) 

}
