const phonePicture = document.querySelector('.phone-picture');

const productImages = document.querySelectorAll('.product-menu img');

productImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
        phonePicture.src = this.src;
    });
});


