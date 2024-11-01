//Elements of fullpage    
    new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right', //Place the navigation bar on right side of the website
    navigationTooltips: ['Home', 'Information', 'Best Selling', 'About us', 'Brewniverse', 'Stockists', 'Reviews', 'Newsletter'], //Label the name for each of the section on the navigation bar
    showActiveTooltip: true, //Show the label on the navigation bar
    controlArrow: false, //Hide the arrow key in the image slider in about us section
    slidesNavigation: true, //Show horizontal sliding to view each page of the about us section
    slidesNavPosition: 'bottom', //Place the slide navigation on the bottom of the section
});

// next slide btn 
let nextSlideBtn = document.querySelectorAll('.next')
nextSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideRight();
    })
})

// previous slide btn 
let prevSlideBtn = document.querySelectorAll('.prev')
prevSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideLeft();
    })
})

// latest promotion dialog
const promoDialogBtn = document.querySelector('.promo-btn')
const latestpromoDialog = document.querySelector('#latest-promo')
// click to trigger dialog show
promoDialogBtn.addEventListener('click', () => latestpromoDialog.show() )

//load ScrollTrigger from gsap
gsap.registerPlugin(ScrollTrigger);

//create a small animation with the position of the element to scroll from down to up
gsap.to(".info1", {
    x: -70,
    y: 30,
    duration: 5,
})


gsap.to(".info3", {
    x: 50,
    y: 30,
    duration: 5,
})

//load the background music into the website
const music = new Audio('audio/drinks.mp3')

//create the button of the sound to play or pause the background music
const soundBtn = document.querySelector('#sound-btn')
soundBtn.addEventListener('click', () => {
  
  if(music.paused){
    music.play()
    soundBtn.name = 'volume-up'
  }else{
    music.pause()
    soundBtn.name = 'volume-mute'
  }
  
})






