
//sliders¤


const slideImgs = document.getElementsByClassName('slider-img')
let slideIndex = 1 ;
function changeImg(n){
    showSlide( slideIndex+=n)
}
function showSlide(n){
    if(n<1 ){
        slideIndex = slideImgs.length
    }
    if(n> slideImgs.length){
        slideIndex = 1 
    }
    for (let i = 0; i <slideImgs.length; i++) {
        slideImgs[i].classList.remove('active')        
    }   

    slideImgs[slideIndex-1].classList.add('active')
}
showSlide(slideIndex)
