/* GSAP */



/********** GSAP to slide up title on page load **********/
window.onload = function() {
    animateTitle()
}

const animateTitle = () => {
    gsap.from(".logoBrand", {
        duration: 2, 
        y: 35
    })
}


/********** GSAP to slide overview items in based on scroll **********/

let overviewItem1 = document.querySelector('.overviewItem1')

const animateCards = () => {
    gsap.from(".overviewItem1", {
        duration: 1.5, 
        x: -700
    }),
    gsap.from(".overviewItem2", {
        duration: 1, 
        x: -700
    }),
    gsap.from(".overviewItem3", {
        duration: 0.5, 
        x: -700
    })

}

// Element in viewport
let search = document.querySelector('#search')

let overviewItem = document.querySelectorAll('.overviewItem')
console.log(overviewItem)

// Function to determine if element is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

let toggleOverviewItem = true

// function to execute if inside viewport
window.addEventListener("scroll", () => {
   if(isInViewport(overviewItem1) == true && toggleOverviewItem == true) {
       overviewItem.forEach(item => {
           item.style.visibility = "visible"
       }) 
       animateCards()
       toggleOverviewItem = false
   } 
})



/********** GSAP Book size increase on hover **********/

let genresItems = document.querySelectorAll('.genresItem')

// Mouse Enter books to increase size
genresItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            duration: 1,
            scale: 1.3
        })
    })
})


// Hover Out books to decrease size
genresItems.forEach(item => {
    item.addEventListener('mouseout', () => {
        gsap.to(item, {
            duration: 1,
            scale: 1
        })
    })
})