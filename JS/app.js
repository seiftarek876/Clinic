const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const searchPop = document.querySelector(".search-pop-up");
const searchBtn = document.querySelector(".search-btn");
const navBar = document.querySelector(".first-nav");
const navBar2 = document.querySelector(".sec-nav");
const smallNav = document.querySelector(".sec-nav");
const smallDivs = document.querySelectorAll(".temp-div2");
const nonDisplayedbtn = document.querySelectorAll(".non-displayed-btn");
const displayedicons = document.querySelectorAll(".displayed-icons");
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const fixedBtn = document.querySelector(".mov-btn");

/*****fixed nav*******/
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    const navHeight2 = navBar2.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navBar.classList.add("fixed-nav");
      smallNav.classList.add("smaller-nav");
      searchPop.style.top = "95px"
    } else {
      navBar.classList.remove("fixed-nav");
      smallNav.classList.remove("smaller-nav");
      searchPop.style.top = "150px"
    }
    if(scrollHeight > navHeight2){
      fixedBtn.classList.add("show-fixed-btn");
    }
    else{
      fixedBtn.classList.remove("show-fixed-btn");
    }
})
/**********Links Nav **********/
navToggle.addEventListener("click", function () {
linksContainer.classList.toggle("show-links");
if(linksContainer.classList.contains("show-links")){
navToggle.innerHTML="<i class='fa fa-times' aria-hidden='true'></i>"
}
else{
  navToggle.innerHTML=("<i class='fas fa-bars'></i>")
}
});
/*****search button*******/
searchBtn.addEventListener("click",() => {

        searchPop.classList.toggle("display-search-btn");
        if(searchPop.classList.contains("display-search-btn")){
        searchBtn.innerHTML="<i class='fa fa-times' aria-hidden='true'></i>"
        searchBtn.classList.add("search-btn-color")
      }
      else{
        searchBtn.innerHTML = "<i class='fa-solid fa-search'></i>"
        searchBtn.classList.remove("search-btn-color")
      };
    })
/********slider ******/
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
   if (counter === slides.length) {
     counter = 0;
   }
   if (counter < 0) {
     counter = slides.length - 1;
   }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      })
    }
/***************hover templates********/
smallDivs.forEach(function(div , index){
  div.addEventListener("mouseenter" , function(){
    displayedicons[index].classList.add("non-displayed-icons");
    nonDisplayedbtn[index].classList.add("displayed-btn");
    div.style.backgroundColor = "rgba(205, 203, 203, 0.786)"
  })
  div.addEventListener("mouseleave",function(){
    displayedicons[index].classList.remove("non-displayed-icons");
    nonDisplayedbtn[index].classList.remove("displayed-btn");
    div.style.backgroundColor = "#fff"
  })
})