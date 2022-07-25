$(function(){

    $(".menu a, .logo, .footer__link").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	});
    
    $('.blog__slider-inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    $('.menu__btn, .header__item a, .logo').on('click', function(){
        $('.header__list').toggleClass('header__list-active');
    })
    
    
    var mixer = mixitup('.gallery__content');
});