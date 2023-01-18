(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".feedback_slider").owlCarousel({
    loop: false,
    margin: 30,
    items: 1,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false
  });

  window.onload = function(){
    let playerBlk = document.querySelector(".video_content"),
        player = document.getElementById("player"),
        play = document.getElementById("play");
    
        playerBlk.addEventListener('click', () => {
            if (playerBlk.classList.contains('play')) {
                playerBlk.classList.remove('play')
                player.pause();
            }else{
                playerBlk.classList.add('play')
                player.play();
            } 
        })
    play.addEventListener("click",function(){
        player.play();
    });

    
}
 
})(jQuery);
