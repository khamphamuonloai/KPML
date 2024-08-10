(function (jQuery){
    "use strict";
    jQuery(document).ready(function(){
        function activaTav(pill){
            jQuery(pill).addClass('active show');
        }

        $(".slick-nav").on("click touch", function (e){
            e.preventDefault();

            var arrow = $(this);

            if(!arrow.hasClass('animate')){
                arrow.addClass('animate');
                setTimeout(() => {
                    arrow.removeClass('animate');
                }, 1600);
            }
        });

        jQuery('.favorites-slider').slick({
            dots:false,
            arrow : true,
            infinite : true,
            speed : 300,
            autoplay : false,
            slidesToShow : 6,
            slidesToScroll :1,
            nextArrow: '<a href="#" class="slick-arrow slick-next position-absolute text-decoration-none"><img src="./imgs/arrow-right.svg" alt=""></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev position-absolute text-decoration-none d-none"><img src="./imgs/arrow-left.svg" alt=""></a>',
            responsive : [
                {
                    breakpoint:1200,
                    settings : {
                        slidesToShow : 3,
                        slidesToScroll : 1,
                        infinite : true,
                        dots : true
                    }
                },
                {
                    breakpoint:768,
                    settings : {
                        slidesToShow : 2,
                        slidesToScroll : 1
                    }
                },
                {
                    breakpoint:480,
                    settings : {
                        slidesToShow : 1,
                        slidesToScroll : 1
                    }
                },
            ]
        });
        jQuery('.favorites-slider-2').slick({
            dots:false,
            arrow : true,
            infinite : true,
            speed : 300,
            autoplay : false,
            slidesToShow : 6,
            slidesToScroll :1,
            nextArrow: '<a href="#" class="slick-arrow slick-next position-absolute text-decoration-none"><img src="./imgs/arrow-right-2.svg" alt=""></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev position-absolute text-decoration-none d-none"><img src="./imgs/arrow-left.svg" alt=""></a>',
            responsive : [
                {
                    breakpoint:1200,
                    settings : {
                        slidesToShow : 3,
                        slidesToScroll : 1,
                        infinite : true,
                        dots : true
                    }
                },
                {
                    breakpoint:768,
                    settings : {
                        slidesToShow : 2,
                        slidesToScroll : 1
                    }
                },
                {
                    breakpoint:480,
                    settings : {
                        slidesToShow : 1,
                        slidesToScroll : 1
                    }
                },
            ]
        });
    });
})(jQuery);


// Declare a variable to store the video source
let videoSrc;

// Add click event listener to all elements with class "video-btn"
document.querySelectorAll('.video-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Get the video source from the data-src attribute
    videoSrc = button.dataset.src;
    console.log(videoSrc);
  });
});

// Add event listener for when the modal is opened
document.getElementById('myModal').addEventListener('shown.bs.modal', () => {
  // Update the video source with autoplay and other options
  document.getElementById('video').src = videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
});

// Add event listener for when the modal is closed
document.getElementById('myModal').addEventListener('hide.bs.modal', () => {
  // Stop the video by resetting the source
  document.getElementById('video').src = videoSrc;
});
