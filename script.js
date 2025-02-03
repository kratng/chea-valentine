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
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start the slideshow when the heart is clicked
document.getElementById("heart").addEventListener("click", function() {
    // Hide the heart and instruction
    document.querySelector(".heart-container").style.display = "none";

    // Show the slideshow immediately
    let slideshow = document.querySelector(".slideshow");
    slideshow.style.display = "block";
    slideshow.style.opacity = 1; // Ensure the slideshow is visible

    // Start the slideshow
    showSlides();
    
    // Show the final message after the slideshow ends (after 9 seconds in this case)
    setTimeout(function() {
        slideshow.style.opacity = 0; // Fade out the slideshow
        setTimeout(function() {
            slideshow.style.display = "none";
            document.getElementById("finalMessage").style.display = "block";
        }, 1000); // Ensure fade-out is complete before showing the message
    }, 9000); // Adjust this delay based on your slideshow duration
});
