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
