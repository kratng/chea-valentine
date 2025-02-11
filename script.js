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
        $('.page:first').fadeIn(600).addClass('active');
        currentPage = 1;
      }, 600);
    } else {
      // Cycle through pages
      if (currentPage < totalPages) {
        $('.page').removeClass('active').fadeOut(300);
        setTimeout(() => {
          $(`.page:eq(${currentPage})`).fadeIn(600).addClass('active');
          currentPage++;
        }, 300);
      } else {
        // Reset to initial state
        $('.page').removeClass('active').fadeOut(300);
        setTimeout(() => {
          card.removeClass('pop-out');
          currentPage = 0;
        }, 300);
      }
    }

    // Handle music
    const music = document.getElementById('valentine-music');
    if (!musicPlayed && music) {
      music.play();
      musicPlayed = true;
    }
  });

  // Hover effect
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
