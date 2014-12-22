$(window).on('load', function(){
    var header_slides = $('.main-slide__slides');
    if( header_slides ) {
        header_slides.carouFredSel({
            items: {
                visible: 1
            },
            prev: '.nav-arrow--prev',
            next: '.nav-arrow--next',
            pagination: {
                container: '.main-slider__bullet-nav',
                anchorBuilder: function() {
                    return '<li class="bullet-nav__item"></li>';
                }
            }
        });
    }

    var food_slides = $('.food-slider__slides');
    if (food_slides) {
        food_slides.carouFredSel( {
            auto: false,
            next: '.nav-arrow--next.food-slider__arrow',
            prev: '.nav-arrow--prev.food-slider__arrow',
            items: {
                visible: 3

            }
        });
    }
});