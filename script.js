let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment the slideIndex to show the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Restart the slideshow after the last slide
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block"; // Slide number is one less than the index

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start the slideshow when the page loads
window.onload = function () {
    showSlides();
};
