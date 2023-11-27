// Select all <pre> elements on the page
let pre = document.querySelectorAll("pre");

// Initialize a variable to keep track of the index
let i = 0;

// Check if there are any <pre> elements
if (pre.length !== 0) {
    // For each <pre> element, create a "Copy" button and append it
    pre.forEach(element => {

        // Create a "Copy" button
        let copyBtn = document.createElement("button");


        // Add a class to the button
        copyBtn.classList.add("copy-button");

        // Set the text content of the button
        copyBtn.innerText = "Copy";

        // Append the button to the <pre> element
        element.appendChild(copyBtn);
    });

    // Add CSS for styling the "Copy" button
    addCopyCss(); // Corrected function name

    // Attach click event listeners to the "Copy" buttons
    copy();
}

// Function to add CSS for styling the "Copy" button
function addCopyCss() {
    // Create a link element for the CSS file
    var styleLink = document.createElement("link");

    // Set the attributes for the link element
    styleLink.rel = "stylesheet";
    styleLink.type = "text/css";
    styleLink.href = "/Source/CSS/copy.css";  // Replace with the actual path to your CSS file

    // Append the link element to the head of the document
    document.head.appendChild(styleLink);
}

// Function to handle the copy functionality
function copy() {
    // Select all elements with the "copy-button" class
    var copyButton = document.querySelectorAll('.copy-button');

    // Attach click event listeners to each "Copy" button
    copyButton.forEach((copyButtonElement, index) => {
        copyButtonElement.addEventListener("click", (copied) => {
            // Copy the text content of the corresponding <pre> element to the clipboard
            navigator.clipboard.writeText(pre[index].firstChild.innerText);
            copyButtonElement.innerHTML = "Copied"
            
            setTimeout(function(){copyButtonElement.innerHTML = "Copy"}, 300)
            
        });
    });
}

