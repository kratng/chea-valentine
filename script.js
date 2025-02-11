$(document).ready(function () {
  let currentPage = 0;
  const totalPages = $('.page').length;
  let musicPlayed = false;

  // Hide all pages initially
  $(".page").hide();

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

  $('.valentines').click(function (e) {
    e.preventDefault();
    const card = $('.card');
    
    if (!card.hasClass('pop-out')) {
      // First click - pop out
      card.addClass('pop-out');
      setTimeout(() => {
        // Show first page
        $('.page:first').fadeIn();
        currentPage = 1;
      }, 500);
    } else {
      // Cycle through pages
      if (currentPage < totalPages) {
        $('.page').fadeOut(300);
        setTimeout(() => {
          $(`.page:eq(${currentPage})`).fadeIn(300);
          currentPage++;
        }, 300);
      } else {
        // Reset to initial state
        $('.page').fadeOut(300);
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
});
