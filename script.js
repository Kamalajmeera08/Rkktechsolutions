// Get modal element
const modal = document.getElementById("contact-modal");

// Get open modal button
const contactLink = document.getElementById("contact-link");

// Get close button
const closeButton = document.querySelector(".close-button");

// Listen for open click
contactLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block";
});

// Listen for close click
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Listen for outside click
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
