$(document).ready(function() {
    //var
    var $nav = $('.solutions__menu'),
        $line = $('.solutions__menu-line'),
        $activeLi,
        liPos;

    // init slick slider
    $('.solutions__slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // init slick slider events
    $('.solutions__slider-list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $nav.find('.active').removeClass('active');
        $('ul.solutions__menu-list li:eq(' + nextSlide + ')').addClass('active');
        refresh();
        lineSet();
    });


    function refresh() {
        $activeLi = $nav.find('li.active');
        liPos = $activeLi.position().left;
    }
    refresh();

    //line setup
    function lineSet() {
        $line.animate({
            'left':liPos
        }, 200);
    }
    lineSet();

    //on click
    $nav.find('li').on('click', function() {
        var slideIndex = $(this).index();
        $activeLi.removeClass('active');
        $(this).addClass('active');
        refresh();
        lineSet();
        $('.solutions__slider-list').slick('slickGoTo', parseInt(slideIndex));
    });
});//end ready
