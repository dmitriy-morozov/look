/* Главный слайдер с прогресс-баром */
$(document).ready(function() {
    var percent = 0,
        bar = $('.progress'),
        crsl = $('#header-slider__carousel');

    function progressBarCarousel() {
        bar.css({
            width: percent + '%'
        });
        percent = percent + 0.5;
        if (percent > 100) {
            percent = 0;
            crsl.carousel('next');
        }
    }
    crsl.carousel({
        interval: false,
        pause: true
    }).on('slid.bs.carousel', function() {});
    var barInterval = setInterval(progressBarCarousel, 30);
    crsl.hover(
        function() {
            clearInterval(barInterval);
        },
        function() {
            barInterval = setInterval(progressBarCarousel, 30);
        })
});



/* Табы */

$('#tab_selector').on('change', function(e) {
    $('.nav-tabs li a').eq($(this).val()).tab('show');
});



/* Load More */

$(function() {
    $("#sales-tab-1 .sales-item").slice(0, 2).show();
    $("#tabs1-loadmore").on('click', function(e) {
        e.preventDefault();
        $("#sales-tab-1 .sales-item:hidden").slice(0, 2).slideDown();
        if ($("#sales-tab-1 .sales-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }

    });
});

$(function() {
    $("#sales-tab-2 .sales-item").slice(0, 2).show();
    $("#tabs2-loadmore").on('click', function(e) {
        e.preventDefault();
        $("#sales-tab-2 .sales-item:hidden").slice(0, 2).slideDown();
        if ($("#sales-tab-2 .sales-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }

    });
});

$(function() {
    $("#sales-tab-3 .sales-item").slice(0, 2).show();
    $("#tabs3-loadmore").on('click', function(e) {
        e.preventDefault();
        $("#sales-tab-3 .sales-item:hidden").slice(0, 2).slideDown();
        if ($("#sales-tab-3 .sales-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }

    });
});

$(function() {
    $("#sales-tab-4 .sales-item").slice(0, 2).show();
    $("#tabs4-loadmore").on('click', function(e) {
        e.preventDefault();
        $("#sales-tab-4 .sales-item:hidden").slice(0, 2).slideDown();
        if ($("#sales-tab-4 .sales-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }

    });
});

$(function() {
    $(".clearence .sales-item").slice(0, 2).show();
    $("#clearence-loadmore").on('click', function(e) {
        e.preventDefault();
        $(".clearence .sales-item:hidden").slice(0, 2).slideDown();
        if ($(".clearence .sales-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }

    });
});



/* Расчёт ширины элементов слайдера в табах*/

jQuery(document).ready(function() {
    var width2 = $('.sales-tab.container').outerWidth();

    if (width2 > 1171) {
        $('.sales-item').width((width2 - 120) * 0.25);
    } else if (width2 > 971) {
        $('.sales-item').width((width2 - 120) * 0.25);
    } else if (width2 > 749) {
        $('.sales-item').width((width2 - 90) * 0.33333);
    } else if (width2 < 749) {
        $('.sales-item').width((width2 - 60) * 0.5);
    }


});

/* Расчёт ширины элементов слайдера в табах при измении ширины окна*/

$(window).resize(function() {
    var width2 = $('.sales-tab.container').outerWidth();

    if (width2 > 1171) {
        $('.sales-item').width((width2 - 120) * 0.25);
    } else if (width2 > 971) {
        $('.sales-item').width((width2 - 120) * 0.25);
    } else if (width2 > 749) {
        $('.sales-item').width((width2 - 90) * 0.33333);
    } else if (width2 < 749) {
        $('.sales-item').width((width2 - 60) * 0.5);
    }

});



/* Слайдер для первого таба */

jQuery(document).ready(function() {
    function htmSlider() {
        /* Зададим следующие переменные */

        /* обертка слайдера */
        var slideWrap = jQuery('.sales-list');
        /* ссылки на предудыщий иследующий слайд */
        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');

        var is_animate = false;

        /* ширина слайда с отступами */
        var slideWidth = jQuery('.sales-item').outerWidth();

        /* смещение слайдера */
        var newLeftPos = slideWrap.position().left - slideWidth;

        /* Клик по ссылке на следующий слайд */
        nextLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });

        /* Клик по ссылке на предыдующий слайд */
        prevLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });



        /* Функция автоматической прокрутки слайдера */
        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function() {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });

    }

    /* иницилизируем функцию слайдера */
    htmSlider();
});

/* Слайдер для второго таба */

jQuery(document).ready(function() {
    function htmSlider() {
        /* Зададим следующие переменные */

        /* обертка слайдера */
        var slideWrap = jQuery('.sales-list-2');
        /* ссылки на предудыщий иследующий слайд */
        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');

        var playLink = jQuery('.auto');

        var is_animate = false;

        /* ширина слайда с отступами */
        var slideWidth = jQuery('.sales-item').outerWidth();

        /* смещение слайдера */
        var newLeftPos = slideWrap.position().left - slideWidth;

        /* Клик по ссылке на следующий слайд */
        nextLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });

        /* Клик по ссылке на предыдующий слайд */
        prevLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });



        /* Функция автоматической прокрутки слайдера */
        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function() {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });


    }

    /* иницилизируем функцию слайдера */
    htmSlider();
});

/* Слайдер для третьего таба */

jQuery(document).ready(function() {
    function htmSlider() {
        /* Зададим следующие переменные */

        /* обертка слайдера */
        var slideWrap = jQuery('.sales-list-3');
        /* ссылки на предудыщий иследующий слайд */
        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');

        var playLink = jQuery('.auto');

        var is_animate = false;

        /* ширина слайда с отступами */
        var slideWidth = jQuery('.sales-item').outerWidth();

        /* смещение слайдера */
        var newLeftPos = slideWrap.position().left - slideWidth;

        /* Клик по ссылке на следующий слайд */
        nextLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });

        /* Клик по ссылке на предыдующий слайд */
        prevLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });



        /* Функция автоматической прокрутки слайдера */
        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function() {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });

    }

    /* иницилизируем функцию слайдера */
    htmSlider();
});

/* Слайдер для четвертого таба */

jQuery(document).ready(function() {
    function htmSlider() {
        /* Зададим следующие переменные */

        /* обертка слайдера */
        var slideWrap = jQuery('.sales-list-4');
        /* ссылки на предудыщий иследующий слайд */
        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');

        var playLink = jQuery('.auto');

        var is_animate = false;

        /* ширина слайда с отступами */
        var slideWidth = jQuery('.sales-item').outerWidth();

        /* смещение слайдера */
        var newLeftPos = slideWrap.position().left - slideWidth;

        /* Клик по ссылке на следующий слайд */
        nextLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });

        /* Клик по ссылке на предыдующий слайд */
        prevLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });



        /* Функция автоматической прокрутки слайдера */
        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function() {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });

    }

    /* иницилизируем функцию слайдера */
    htmSlider();
});


/* Слайдер для  Clearance */

jQuery(document).ready(function() {
    function htmSlider() {
        /* Зададим следующие переменные */

        /* обертка слайдера */
        var slideWrap = jQuery('.sales-list-5');
        /* ссылки на предудыщий иследующий слайд */
        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');

        var playLink = jQuery('.auto');

        var is_animate = false;

        /* ширина слайда с отступами */
        var slideWidth = jQuery('.sales-item').outerWidth();

        /* смещение слайдера */
        var newLeftPos = slideWrap.position().left - slideWidth;

        /* Клик по ссылке на следующий слайд */
        nextLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });

        /* Клик по ссылке на предыдующий слайд */
        prevLink.click(function() {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });



        /* Функция автоматической прокрутки слайдера */
        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function() {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function() {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });

    }

    /* иницилизируем функцию слайдера */
    htmSlider();
});