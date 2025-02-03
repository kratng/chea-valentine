function showHearts() {
    const container = document.getElementById("hearts-container");
    const photo = document.getElementById("special-photo");
    const song = document.getElementById("love-song");

    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.fontSize = ${Math.random() * 30 + 20}px;
        heart.style.left = ${Math.random() * 100}%;
        heart.style.animation = "floatUp 3s linear infinite";
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    // Show photo
    photo.style.display = "block";

    // Play music
    song.play();
}

// Slideshow function
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start slideshow when page loads
window.onload = function () {
    showSlides();
};