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
      // First click - pop out
      card.addClass('pop-out');
      setTimeout(() => {
        // Show first page with fade effect
        $('.page:first').fadeIn(600);
        currentPage = 1;
      }, 300);
    } else {
      // Cycle through pages with slide effect
      if (currentPage < totalPages) {
        $(`.page:eq(${currentPage - 1})`).fadeOut(300);
        setTimeout(() => {
          $(`.page:eq(${currentPage})`).fadeIn(600);
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

  // Improved hover effect with CSS transition
  $('.valentines').hover(
    function() {
      if (!$('.card').hasClass('pop-out')) {
        $('.card').css({
          'transform': 'translateY(-20px)',
          'transition': 'transform 0.3s ease-out'
        });
      }
    },
    function() {
      if (!$('.card').hasClass('pop-out')) {
        $('.card').css({
          'transform': 'translateY(0)',
          'transition': 'transform 0.3s ease-out'
        });
      }
    }
  );
});
