$(function () {

  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product__num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        draggable: true,
      }
    }]

  });

  var acc = document.getElementsByClassName("filter-title");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


  $('.shop-content__btn').on('click', function () {
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  });

  $('.button-list').on('click', function () {
    $('.shop-content__items').addClass('shop-content__items--list')
  })

  $('.button-grid').on('click', function () {
    $('.shop-content__items').removeClass('shop-content__items--list')
  })

  $('.button-list').on('click', function () {
    $('.shop__filters').addClass('shop__filters--list')
  })

  $('.button-grid').on('click', function () {
    $('.shop__filters').removeClass('shop__filters--list')
  })

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "5px",
    readOnly: true,
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13pt" height="12pt" viewBox="0 0 13 12" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;" d="M 5.851562 0.417969 L 4.378906 3.519531 L 1.082031 4.019531 C 0.488281 4.109375 0.253906 4.867188 0.679688 5.300781 L 3.066406 7.714844 L 2.503906 11.125 C 2.402344 11.738281 3.027344 12.203125 3.550781 11.914062 L 6.5 10.304688 L 9.449219 11.914062 C 9.972656 12.199219 10.597656 11.738281 10.496094 11.125 L 9.933594 7.714844 L 12.320312 5.300781 C 12.746094 4.867188 12.511719 4.109375 11.917969 4.019531 L 8.621094 3.519531 L 7.148438 0.417969 C 6.882812 -0.136719 6.117188 -0.144531 5.851562 0.417969 Z M 5.851562 0.417969 "/></g></svg>',
  });

  $(".star-list").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "10px",
    readOnly: true,
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13pt" height="12pt" viewBox="0 0 13 12" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;" d="M 5.851562 0.417969 L 4.378906 3.519531 L 1.082031 4.019531 C 0.488281 4.109375 0.253906 4.867188 0.679688 5.300781 L 3.066406 7.714844 L 2.503906 11.125 C 2.402344 11.738281 3.027344 12.203125 3.550781 11.914062 L 6.5 10.304688 L 9.449219 11.914062 C 9.972656 12.199219 10.597656 11.738281 10.496094 11.125 L 9.933594 7.714844 L 12.320312 5.300781 C 12.746094 4.867188 12.511719 4.109375 11.917969 4.019531 L 8.621094 3.519531 L 7.148438 0.417969 C 6.882812 -0.136719 6.117188 -0.144531 5.851562 0.417969 Z M 5.851562 0.417969 "/></g></svg>',
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",

    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.trendy-slider__items').slick({
    dots: true,
    arrows: false,
  });

  $('.related-products__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
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
          slidesToShow: 1,
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

  $('.menu__button').on('click', function () {
    $('body').toggleClass('lock-scroll');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
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