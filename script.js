$(document).ready(function () {
  let currentPage = 0;
  const totalPages = $('.page').length;
  let musicPlayed = false;

  // Hide all pages initially
  $(".page").removeClass('active');

  $('.valentines').click(function (e) {
    e.preventDefault();
    const card = $('.card');
    
    if (!card.hasClass('pop-out')) {
      // First click - pop out
      card.addClass('pop-out');
      setTimeout(() => {
        // Show first page
        $('.page').removeClass('active');
        $('.page:first').addClass('active');
        currentPage = 1;
      }, 300);
    } else {
      // Cycle through pages
      if (currentPage < totalPages) {
        $('.page').removeClass('active');
        $(`.page:eq(${currentPage})`).addClass('active');
        currentPage++;
      } else {
        // Reset to initial state
        $('.page').removeClass('active');
        setTimeout(() => {
          card.removeClass('pop-out');
          currentPage = 0;
        }, 300);
      }
    }

    // Handle music
    const music = document.getElementById('valentine-music');
    if (!musicPlayed) {
      music.play();
      musicPlayed = true;
    }
  });

  // Hover effect
  $('.valentines').hover(
    function() {
      if (!$('.card').hasClass('pop-out')) {
        $('.card').stop().animate({ top: '-30px' }, 'slow');
      }
    },
    function() {
      if (!$('.card').hasClass('pop-out')) {
        $('.card').stop().animate({ top: '5px' }, 'slow');
      }
    }
  );
});
