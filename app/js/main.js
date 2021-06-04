$(function () {
  $('.trendy-slider__items').slick({
    dots: true,
    arrows: false,
  });

  $('.partners__items').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.menu__button').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__button').on('click', function () {
    $('.user-nav').toggleClass('user-nav--active');
  });

  $('.menu__button').on('click', function () {
    $('.menu__button').toggleClass('menu__button--active');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header__top').addClass('header__top--fixed');
    } else {
      $('.header__top').removeClass('header__top--fixed');
    }
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});