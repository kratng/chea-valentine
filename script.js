let slideIndex = 0;

// Function to start the slideshow
function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Restart slideshow after last slide
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start slideshow when heart is clicked
document.getElementById("heart").addEventListener("click", function() {
    // Hide the welcome screen
    document.querySelector(".welcome-screen").style.display = "none";

    // Show the slideshow
    let slideshow = document.querySelector(".slideshow");
    slideshow.style.display = "block";
    
    // Start slideshow
    showSlides();
    
    // Start playing the music
    document.getElementById("backgroundMusic").play();
    
    // Show final message after slideshow ends
    setTimeout(function() {
        slideshow.style.display = "none"; // Hide slideshow
        document.getElementById("finalMessage").style.display = "block"; // Show final message
    }, 9000); // Total slideshow duration (3 seconds * number of slides)
});
