$(document).ready(function () {
  let currentPage = 0;
  const totalPages = $('.page').length;
  let musicPlayed = false;

  // Preload images
  $('.page img').each(function() {
    const img = new Image();
    img.src = $(this).attr('src');
  });

  // Hide all pages initially
  $(".page").hide();

  $('.valentines').click(function (e) {
    e.preventDefault();
    const card = $('.card');
    
    if (!card.hasClass('pop-out')) {
      // First click - pop out and up
      card.addClass('pop-out');
      // Wait for the card to pop out before showing the first page
      setTimeout(() => {
        $('.text, .heart').fadeOut(200);
        setTimeout(() => {
          $('.page:first').fadeIn(400).addClass('active');
          currentPage = 1;
        }, 200);
      }, 400);
    } else {
      // Cycle through pages with slide effect
      if (currentPage < totalPages) {
        $('.page.active').fadeOut(200, function() {
          $(this).removeClass('active');
          $(`.page:eq(${currentPage})`).fadeIn(400).addClass('active');
          currentPage++;
        });
      } else {
        // Reset to initial state
        $('.page.active').fadeOut(200, function() {
          card.removeClass('pop-out');
          $('.text, .heart').fadeIn(400);
          currentPage = 0;
        });
      }
    }

    // Handle music
    const music = document.getElementById('valentine-music');
    if (!musicPlayed && music) {
      music.play().catch(function(error) {
        console.log("Music play failed:", error);
      });
      musicPlayed = true;
    }
  });

  // Smooth hover effect
  $('.valentines').hover(
    function() {
      if (!$('.card').hasClass('pop-out')) {
        $('.card').addClass('hover-up');
      }
    },
    function() {
      if (!$('.card').hasClass('pop-out')) {
        $('.card').removeClass('hover-up');
      }
    }
  );
});
