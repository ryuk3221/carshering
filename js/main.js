$(function(){
  $('.benefits__popup-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
  $('.top__slider-inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: false,
        }
      },
    ]
  });
  $('.reviews__slider').slick({
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 2,
          dots: false,
          slidesToScroll: 1,
          autoplay: true,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ]
  });
});
let x = false
function myFunc(){
  
  if (x === false){
    document.getElementById('headerMain').style.transform='translateX(-0%)'
    x = true
  }
  else {
    document.getElementById('headerMain').style.transform='translateX(-102%)'
    x = false
  }
}
function menuHidden(){
  if (window.innerWidth <= 475) {
    document.getElementById('headerMain').style.transform='translateX(-102%)'
  }
}