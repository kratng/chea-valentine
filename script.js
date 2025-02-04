$(document).ready(function () {
  let currentPage = 0;
  const totalPages = 3;
  let musicPlayed = false;

  $('.container').click(function () {
    if (currentPage > 0) {
      $(`.page${currentPage}`).hide();
    }

    currentPage++;

    if (currentPage <= totalPages) {
      $(`.page${currentPage}`).fadeIn();
    } else {
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
