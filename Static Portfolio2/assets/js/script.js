/* 
    Author Name : Er. Manish Kumar 
   Project Name : Personal Portfolio
        YouTube : https://www.youtube.com/@IT_Wallah
        Twitter : https://www.twitter.com/ITWallah6   
       Facebook : https://www.facebook.com/ITWallah6
      Instagram : https://www.instagram.com/it_wallah6
           Date : 17/04/2024
*/

//window scroll

$(window).on("scroll", function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop >=100){
    $('body').addClass('fixed-header');
  }
  else{
    $('body').removeClass('fixed-header')
  }
});

/*  typed  animation*/

$(document).ready(function(){
new Typed('#type-it', {
    strings: ['Java Developer', 'YouTuber','Logo Designer','Video Maker','Reels Maker'],
    typeSpeed: 100,
    loop:true,
  });

  /* Owl Carousel */

  $('.owl-carousel').owlCarousel({
    loop:true,
    items:2,
    margin:30,
    autoplay:true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
    }
});
});

