$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        moveSlides: 1,
        maxSlides: 1,
        caption: true,
        speed: 3000,
        pager: true,
        pagerSelector: "#id_pager",
        captions: true,
        pagerType: 'short',
    });
});