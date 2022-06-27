let totalSlides = document.querySelectorAll('.img-container').length;
let currentSlide = 0;

document.querySelector('.slider-move').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }

    updateMargin();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }

    updateMargin();
}

function updateMargin(){
    let imgWidth = document.querySelector('.img-container').clientWidth;
    let newMargin = (currentSlide * imgWidth);
    document.querySelector('.slider-move').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);

