$(function () {
    /*============================*/
    /* 01 - function on page load */
    /*============================*/
    $(window).load(function () {
        $('body').addClass('loaded');
        $('#loader-wrapper').fadeOut(500);
    });
    /*============================*/
    /* 02 - Click Menu */
    /*============================*/

    $(window).resize(function () {
        var wid = $(window).width();
        if (wid > 769 && $('.navi').is(':hidden')) {
            $('.navi').removeAttr('style');
        }
    });
    $('.icon-menu').click(function () {
        $('.navi').slideToggle(700);
    });

    $('.icon-menu').click(function () {
        $(this).toggleClass("active");
    });

    /*============================*/
    /* 03 - SWIPER*/
    /*============================*/
    var mySwiperHomeSlider = $('header .swiper-container').swiper({
        loop: true,
        pagination: '.pagination',
        paginationClickable: true,
        grabCursor: true,
        speed: 800,
        slidesPerView: 1
    });
    var mySwiperBlogSlider = $('.blog .swiper-container').swiper({
        loop: true,
        grabCursor: true,
        speed: 800,
        slidesPerView: 3,
        nextButton: '.arrow_right',
        prevButton: '.arrow_left',
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        }
    });
    /*============================*/
    /* 04 - SCROll */
    /*============================*/
    var $menu = $(".default");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 50 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });
    /*============================*/
    /* 05 - ISOTOPE */
    /*============================*/

    var $container = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.element-item'
        }
    });
    $('#filters').on('click', 'button', function () {
        $('#filters button').removeClass('is-checked');
        $(this).addClass('is-cheked');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });
    /*============================*/
    /* 06 - countTo */
    /*============================*/

    $('.timer').countTo();

    /*============================*/
    /* 07 - CIRCLIFUL*/
    /*============================*/

    $(window).scroll(function () {
        var circle1 = $('#circle1');

        var hT = $('#circle1').offset().top,
            hH = $('#circle1').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();

        if (wS > (hT + hH - wH) && !circle1.hasClass('endDrawingCircliful')) {
            circle1.addClass('endDrawingCircliful')

            $('#circle1').circliful({
                foregroundColor: '#f4c60b',
                backgroundColor: '#fff',
                foregroundBorderWidth: 7,
                backgroundBorderWidth: 7,
                percent: 75,
                fontColor: '#000',
                animationStep: 3,
                percentageTextSize: '28'

            });
            $('#circle2').circliful({
                foregroundColor: '#f4c60b',
                backgroundColor: '#fff',
                foregroundBorderWidth: 7,
                backgroundBorderWidth: 7,
                percent: 90,
                fontColor: '#000',
                animationStep: 3,
                percentageTextSize: '28'

            });
            $('#circle3').circliful({
                foregroundColor: '#f4c60b',
                backgroundColor: '#fff',
                foregroundBorderWidth: 7,
                backgroundBorderWidth: 7,
                percent: 30,
                fontColor: '#000',
                animationStep: 3,
                percentageTextSize: '28'
            });
        }

    });

    /*============================*/
    /* 08 - Scrollt2id */
    /*============================*/
    $("a[href*='#']").mPageScroll2id();


    /*============================*/
    /* 09 - WOW */
    /*============================*/
    new WOW().init();


});
