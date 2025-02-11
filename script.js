$(document).ready(function () {
  let currentPage = 0;
  const totalPages = $('.page').length; // Get actual number of pages
  let musicPlayed = false;

  // Hide all pages initially
  $(".page").hide();

  // Click handler for the valentine card
  $('.valentines').click(function (e) {
    e.preventDefault();
    const card = $('.card');
    
    // Toggle card animation
    if (!card.hasClass('pop-out')) {
      // First click - pop out the card
      card.addClass('pop-out');
      setTimeout(() => {
        // After pop-out animation, show first page
        card.addClass('book');
        $('.page:first').fadeIn();
        currentPage = 1;
      }, 500);
    } else {
      // Subsequent clicks - cycle through pages
      if (currentPage < totalPages) {
        $('.page').hide();
        $(`.page:nth-child(${currentPage + 3})`).fadeIn(); // +3 to skip text and heart divs
        currentPage++;
      } else {
        // Reset to initial state
        $('.page').hide();
        card.removeClass('book pop-out');
        currentPage = 0;
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
    function () {
      if (!$('.card').hasClass('pop-out')) {
        $('.card').stop().animate({ top: '-90px' }, 'slow');
      }
    },
    function () {
      if (!$('.card').hasClass('pop-out')) {
        $('.card').stop().animate({ top: '5px' }, 'slow');
      }
    }
  );
});
