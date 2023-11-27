// Select all code elements and head element in the document
let code = document.querySelectorAll('code');
let head = document.querySelectorAll("head");

// Function to change the source code style
function changeSourceCodeStyle() {
    // Iterate through each code element
    code.forEach(function (e) {

        // Switch based on the class of the code element
        switch (e.classList[0]) {
            case "undefined":
                console.log(`${e}: is undefined`);
                break;
            case "lang-css":

                // Create a new link element for the stylesheet
                var styleLink = document.createElement("link");

                // Set attributes for the link element
                styleLink.rel = "stylesheet";
                styleLink.type = "text/css";
                styleLink.href = "https://cdn.jsdelivr.net/gh/Rajib10098/Links@main/template/language/css.css";  // Replace with the actual path to your CSS file

                // Append the link element to the head of the document
                document.head.appendChild(styleLink);
                break;
            default:
                break;
        }
    });
}

// Event listener for the "load" event, triggering the style change after a delay of 1000 milliseconds
window.addEventListener("load", () => {
    setTimeout(changeSourceCodeStyle, 1000);
});
