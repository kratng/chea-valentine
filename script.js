$(document).ready(function () {
  let currentPage = 0;
  const totalPages = $('.page').length;
  let musicPlayed = false;

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
        $('.text, .heart').fadeOut(300);
        setTimeout(() => {
          $('.page:first').fadeIn(600).addClass('active');
          currentPage = 1;
        }, 300);
      }, 300);
    } else {
      // Cycle through pages with slide effect
      if (currentPage < totalPages) {
        $('.page.active').fadeOut(300).removeClass('active');
        setTimeout(() => {
          $(`.page:eq(${currentPage})`).fadeIn(600).addClass('active');
          currentPage++;
        }, 300);
      } else {
        // Reset to initial state
        $('.page.active').fadeOut(300);
        setTimeout(() => {
          card.removeClass('pop-out');
          $('.text, .heart').fadeIn(600);
          currentPage = 0;
        }, 300);
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
