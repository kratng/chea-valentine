$(document).ready(function () {
  let currentPage = 0;
  const totalPages = 3;
  let musicPlayed = false;

  // Hide all pages initially (except the letter)
  $(".page").hide();
  $(".text").show(); // Show the Valentine's message
  $(".heart").show(); // Show the heart button

  $('.container').click(function () {
    if (currentPage > 0) {
      $(`.page${currentPage}`).hide();
    } else {
      $(".text, .heart").hide(); // Hide the letter and heart on first click
    }

    currentPage++;

    if (currentPage <= totalPages) {
      $(`.page${currentPage}`).fadeIn();
    } else {
      // If all pages are viewed, return to the letter
      $(".page").hide();
      $(".text, .heart").fadeIn();
      currentPage = 0;
    }

    // Play music only once
    if (!musicPlayed) {
      document.getElementById('valentineAudio').play();
      musicPlayed = true;
    }
  });

  $('.container').mouseenter(function () {
    $('.card').stop().animate({ top: '-90px' }, 'slow');
  }).mouseleave(function () {
    $('.card').stop().animate({ top: '5px' }, 'slow');
  });
});
