const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlider = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlider].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlider = i;
    })
})

// toggle size buttuns

const sizeBtn = document.querySelectorAll(".size-radio-btn");
let checkedBtn  = 0;

sizeBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtn[checkedBtn].classList.remove('check');
        item.classList.add('check');
    
        checkedBtn = i;
    })
})

