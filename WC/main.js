const firstImage = document.getElementById('first_image');
const secondImage = document.getElementById('second_image');

const firstImg = document.getElementById('first_img');
const secondImg = document.getElementById('second_img');

const compareFlexCenterContainer = document.getElementById('compare_flex_center_container');

const rangeSlider = document.getElementById('range_slider');

// Set Values
var fullWidth;
var halfWidth;

// Window height & width
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

// If windowWidth > 700
var fullValue = 400;
var divideValue = 2;

// Else
var margin;

function updateCss() {
    if (windowWidth > 700) {
        // console.log(windowWidth);
        console.log();
        firstImage.style.width = (fullValue / 2) + "px";
        secondImage.style.width = (fullValue / 2) + "px";

        firstImg.style.width = fullValue + "px";
        secondImg.style.width = fullValue + "px";
        rangeSlider.max = fullValue;
        rangeSlider.value = fullValue / 2;

        // Range Slider
        rangeSlider.style.width = fullValue + "px";

        // Alignment
        secondImg.style.marginLeft = (-fullValue / 2) + "px";
    } else {
        margin = windowWidth - 50;

        firstImage.style.width = (margin / 2) + "px";
        secondImage.style.width = (margin / 2) + "px";

        firstImg.style.width = margin + "px";
        secondImg.style.width = margin + "px";

        rangeSlider.max = margin;
        rangeSlider.value = (margin / 2);

        // Range Slider
        rangeSlider.style.width = margin + "px";

        // Alignment
        secondImg.style.marginLeft = (-margin / 2) + "px";
    }
}

window.addEventListener("resize", () => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    if (windowWidth > 700) {
        // Handle specific actions for window width greater than 700
    } else {
        rangeSlider.max = windowWidth - 50;
    }

    updateCss();

    console.log('Resizing');
    console.log(`Window width: ${window.innerWidth}`);
    console.log(`Window height: ${window.innerHeight}`);
});

document.addEventListener('DOMContentLoaded', function () {
    // Code to execute when the DOM content is loaded
    // Add your desired actions or functions here
});

window.onload = function () {
    updateCss();
    // Code to execute when the page finishes loading
    // Add your desired actions or functions here
};

rangeSlider.addEventListener("input", () => {
    if (windowWidth > 700) {
        console.log(rangeSlider.value);
        console.log(`RangeSlider value: ${Number(rangeSlider.value)}`);
        firstImage.style.width = rangeSlider.value + "px";
        secondImage.style.width = ((fullValue / 2) - (rangeSlider.value - (fullValue / 2))) + "px";
        secondImg.style.marginLeft = (-rangeSlider.value) + "px";

        // console.log((300 - (rangeSlider.value - 300)));
    } else {
        firstImage.style.width = rangeSlider.value + "px";
        secondImage.style.width = ((margin / 2) - (rangeSlider.value - (margin / 2))) + "px";
        secondImg.style.marginLeft = (-rangeSlider.value) + "px";
    }
});



//compress.js start
// const imageInput = document.getElementById('imageInput');
const compressedImage = document.getElementById('compressedImage');

var fixImageHeight;
var fixImageWidth

var imageHeight;
var imageWidth;

imageInput.addEventListener('change', function (event) {
    // Get the selected file from the file input
    const selectedFile = event.target.files[0];

    // Create a FileReader object
    const reader = new FileReader();

    // Set up the FileReader onload function
    reader.onload = function (event) {
        // Update the image source with the selected image data
        document.getElementById('first_img').src = event.target.result;
        if (isRatioOk == true) {
            compressImage()
            console.log(isRatioOk);
        }
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(selectedFile);
});

function everythingOk() {

}

function compressImage() {

    const file = imageInput.files[0];
    const reader = new FileReader();
    console.log(file);
    reader.onload = function (event) {
        var img = new Image();

        img.onload = function () {
           if(fixImageHeight === undefined){
            fixImageHeight = img.height;
            fixImageWidth = img.width
            updateIWHdatatoWHInputFill()
            ratioHUpdate()
            ratioWUpdate()
           }
         
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imageWidth;
            canvas.height = imageHeight;
            ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
            // ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.toBlob(function (blob) {
                const compressedUrl = URL.createObjectURL(blob);
                compressedImage.src = compressedUrl;
                secondImg.src = compressedUrl;
            }, 'image/jpeg', (Number(ratioValue.value) / 100 * 1)); // Adjust the compression quality as needed
        };
        img.src = event.target.result;
    };

    reader.readAsDataURL(file);
}

function clearImage() {
    const compressedImage = document.getElementById('compressedImage');
    compressedImage.src = '';
    const imageInput = document.getElementById('imageInput');
    imageInput.value = '';
}

//compress.js end

//main.js start
const compressImageBtn = document.getElementById('compress_btn')
const inpuImageBtn = document.getElementById('input_image_btn')
const ratioValue = document.getElementById('ratio_value')
const sliderInput = document.getElementById('slider_input')
const ratioW = document.getElementById('ratio_w')
const ratioH = document.getElementById('ratio_h')



var isRatioOk = false;
var isimageHW = false;

compressImageBtn.addEventListener('click', () => {
    // console.log("click");
    if (imageInput.value != "") {
        compressImage()
    }

})

inpuImageBtn.addEventListener('click', () => {
    fixImageHeight = undefined
    fixImageWidth = undefined
    imageInput.click()
})


imageInput.addEventListener('input', () => {
    // console.log("input");
    compressImageBtn.classList.replace('disable_color', 'ui_btns')
})

ratioValue.addEventListener('input', () => {
    ratioValueUpdate()
})
function ratioValueUpdate() {

    if (isNaN(Number(ratioValue.value)) == false) {

        if (Number(ratioValue.value < 100)) {
            sliderInput.value = Number(ratioValue.value)
            localStorage.setItem('lsRatioValue', Number(ratioValue.value))
            isRatioOk = true
        } else {
            ratioValue.value = 100;
            sliderInput.value = 100;
            localStorage.setItem('lsRatioValue', 100)
            isRatioOk = true

        }
        ratioValue.classList.replace('error_ratio_input', 'ratio_input')
        if (Number(ratioValue.value) == 0) {
            ratioValue.classList.replace('ratio_input', 'error_ratio_input')
            isRatioOk = false
        }

    } else {
        ratioValue.classList.replace('ratio_input', 'error_ratio_input')
        isRatioOk = false
    }

    console.log(isRatioOk);
};

function lsRatioValueUpdate() {
    if (localStorage.getItem('lsRatioValue') != null) {
        ratioValue.value = localStorage.getItem('lsRatioValue')
        sliderInput.value = localStorage.getItem('lsRatioValue')
    } else {
        ratioValue.value = sliderInput.value

    }
}


sliderInput.addEventListener('input', () => {
    ratioValue.value = sliderInput.value
    ratioValue.classList.replace('error_ratio_input', 'ratio_input')
    localStorage.setItem('lsRatioValue', Number(sliderInput.value))
    isRatioOk = true
    console.log(isRatioOk);
    if (Number(sliderInput.value) == 0) {
        ratioValue.classList.replace('ratio_input', 'error_ratio_input')
        isRatioOk = false
        console.log(isRatioOk);
    }
})

ratioW.addEventListener('input', () => {
    ratioWUpdate()
})

function ratioWUpdate() {
    if (imageInput.value != "") {
        if (isNaN(Number(ratioW.value)) == false) {
            ratioH.value = ((fixImageHeight * Number(ratioW.value)) / fixImageWidth)
              imageHeight = Number(ratioH.value)
            imageWidth = Number(ratioW.value)
            ratioW.classList.replace('error_ratio_w_h', 'ratio_w_h')
            isimageHW = true
            
            if (Number(ratioW.value) == 0) {
                ratioW.classList.replace('ratio_w_h', 'error_ratio_w_h')
                isimageHW = false
                // ratioHUpdate()
            }

        } else {
            ratioW.classList.replace('ratio_w_h', 'error_ratio_w_h')
            isimageHW = false
        }
    }
}

ratioH.addEventListener('input', () => {
    ratioHUpdate()
})

function ratioHUpdate() {
    if (imageInput.value != "") {
        if (isNaN(Number(ratioH.value)) == false) {
            ratioW.value = ((fixImageWidth * Number(ratioH.value)) / fixImageHeight)
            imageHeight = Number(ratioH.value)
            imageWidth = Number(ratioW.value)
            ratioH.classList.replace('error_ratio_w_h', 'ratio_w_h')
            isimageHW = true
            if (Number(ratioH.value) == 0) {
                // ratioWUpdate()
                ratioH.classList.replace('ratio_w_h', 'error_ratio_w_h')
                isimageHW = false
            }

        } else {
            ratioH.classList.replace('ratio_w_h', 'error_ratio_w_h')
            isimageHW = false

        }
    }
}
function updateIWHdatatoWHInputFill() {
    ratioH.value = fixImageHeight
    ratioW.value = fixImageWidth
}
window.addEventListener("load", () => {
    imageInput.value = "";
    ratioW.value = ""
    ratioH.value = ""
    lsRatioValueUpdate()
    ratioValueUpdate()
    ratioWUpdate()
    ratioHUpdate()
})


//main.js end
