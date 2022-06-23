const accordTitle = document.querySelectorAll(".accodeon__title")
const accordDesc = document.querySelectorAll(".accordeon__desc")
const header = document.querySelector(".header")
const intro = document.querySelector(".intro")
const navBarHeight = document.querySelector(".header").getBoundingClientRect().height;

// Accodion 
accordTitle.forEach(function(item){
    item.addEventListener("click",function(){

        const id = item.getAttribute("idAttribute")
        document.getElementById(id).classList.toggle("active")

    })
})
// navbar hide show
window.addEventListener("DOMContentLoaded", checkScroll)
window.addEventListener("scroll", checkScroll)

function checkScroll(){
    let introHeight = intro.getBoundingClientRect().height 
    
    if (window.pageYOffset > introHeight - navBarHeight - 1) {
        header.classList.add("fixed")
    }else header.classList.remove("fixed")
}

// toggle nav__link
const navToggle = document.querySelector(".nav__toggle")
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav__link")


// const section = document.querySelectorAll(".section")


navToggle.addEventListener("click", function(){
    navToggle.classList.toggle("active")
    nav.classList.toggle("active");
    header.classList.toggle("active");
})

navLink.forEach(function(item){
    item.addEventListener("click", function(e){
        navToggle.classList.remove("active")
        nav.classList.remove("active")
        header.classList.remove("active");
        // scroll
        e.preventDefault();
        ID = item.getAttribute("href").slice(1);
        position = document.getElementById(ID).offsetTop;
        var newPosition = position - navBarHeight;
        window.scrollTo(0, newPosition);
    })

})

// link active status

const section = document.querySelectorAll(".link")


window.addEventListener("DOMContentLoaded",function(){
    scrollPosition = window.scrollY
     section.forEach(function(item){
        topPosition = item.offsetTop
        ID = item.getAttribute("id").slice(1)
        if( scrollPosition >= topPosition - navBarHeight-2){
            navLink.forEach(function(item){
                item.classList.remove("active")
            })
            document.getElementById(ID).classList.add("active")
        }
    })
})

window.addEventListener("scroll", function(){
    scrollPosition = window.scrollY
     section.forEach(function(item){
        topPosition = item.offsetTop
        bottomPosition = topPosition + item.getBoundingClientRect().height
        ID = item.getAttribute("id").slice(1)
        if( scrollPosition >= topPosition - navBarHeight-2 &&   scrollPosition < bottomPosition){
            navLink.forEach(function(item){
                item.classList.remove("active")
            })
            document.getElementById(ID).classList.add("active")
        }
    })
    
})




// review slide
const arrow__left__1 = document.querySelector(".arrow__left__1")
const arrow__left__2 = document.querySelector(".arrow__left__2")
const arrow__right__1 = document.querySelector(".arrow__right__1")
const arrow__right__2 = document.querySelector(".arrow__right__2")
const review__1 = document.querySelectorAll(".review__1")
const review__2 = document.querySelectorAll(".review__2")

arrow__left__1.addEventListener("click",function(){
    slideReview(review__1, -1)
})
arrow__right__1.addEventListener("click",function(){
    slideReview(review__1, 1)
})
arrow__left__2.addEventListener("click",function(){
    slideReview(review__2, -1)
})
arrow__right__2.addEventListener("click",function(){
    slideReview(review__2, 1)
})

function slideReview(reviewNumber, direction){
    reviewNumber.forEach(function(item){
        if(item.classList.contains("active")){
            indexOfreview = parseInt(item.getAttribute("reviewIndex"))
        }
    })
    reviewNumber[indexOfreview].classList.remove("active")

    if (direction > 0){
        if (indexOfreview < reviewNumber.length - 1){      
            reviewNumber[indexOfreview + 1].classList.add("active")
        } 
        else reviewNumber[0].classList.add("active")
    }
    else {
        if (indexOfreview > 0){
            reviewNumber[indexOfreview - 1].classList.add("active")
        } 
        else reviewNumber[reviewNumber.length - 1].classList.add("active")
    }   
}


