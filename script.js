function playMusicAndShowSlideshow() {
  // Play music
  const music = document.getElementById('valentine-music');
  music.play();

  // Show slideshow
  const slideshow = document.getElementById('slideshow');
  slideshow.style.display = 'block';

  // Start slideshow animation
  let currentIndex = 0;
  const images = slideshow.getElementsByTagName('img');
  setInterval(() => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }, 3000); // Change image every 3 seconds
}
