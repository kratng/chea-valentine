$(document).ready(function () {
  let currentPage = 0;
  const totalPages = 3;

  $('.container').click(function () {
    if (currentPage < totalPages) {
      if (currentPage > 0) {
        $(`.page${currentPage}`).hide();
      }
      currentPage++;
      $(`.page${currentPage}`).fadeIn();
    } else {
      $(`.page${currentPage}`).hide();
      currentPage = 0;
    }

    // Play music on first click
    if (currentPage === 1) {
     
 document.getElementById('valentineAudio').play();
    }
  });

  $('.container').mouseenter(function () {
    $('.card').stop().animate({
      top: '-90px'
    }, 'slow');
  }).mouseleave(function () {
    $('.card').stop().animate({
      top: '5px'
    }, 'slow');
  });
});
