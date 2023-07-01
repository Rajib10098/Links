const imageInput = document.getElementById('imageInput');
// const compressedImage = document.getElementById('compressedImage');
const compress = document.getElementById('compress')
imageInput.addEventListener('change', function (event) {
    // Get the selected file from the file input
    const selectedFile = event.target.files[0];

    // Create a FileReader object
    const reader = new FileReader();

    // Set up the FileReader onload function
    reader.onload = function (event) {
        // Update the image source with the selected image data
        document.getElementById('first_img').src = event.target.result;
        compressImage()
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(selectedFile);
});


function compressImage() {

    const file = imageInput.files[0];
    const reader = new FileReader();
    console.log(file);
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.toBlob(function (blob) {
                const compressedUrl = URL.createObjectURL(blob);
                compressedImage.src = compressedUrl;
                secondImg.src = compressedUrl;
            }, 'image/jpeg', 0.1); // Adjust the compression quality as needed
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
