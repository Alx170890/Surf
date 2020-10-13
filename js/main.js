$(function(){
    $(".header__slider").slick({
        infinite: true,
        fade: true,                        
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrow"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrow"></img>',
        asNavFor: '.slider-dotshead',
    });
    $(".slider-dotshead").slick({
        asNavFor: '.header__slider',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 961,
            settings: "unslick"
          }
        ]
    });
    $(".surf-slider").slick({
      // focusOnSelect: true,
        // centerMode: false,
        infinite: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrow"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrow"></img>',
        // fade: true,   
        slidesToShow: 4,
        slidesToScroll: 1,    
        asNavFor: '',
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 910,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 601,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
          {
            breakpoint: 401,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          }
        ]
    });
    $(".slider-map").slick({
        asNavFor: '.surf-slider',
        slidesToShow: 8,
        slidesToScroll: 1,  
        arrows: false,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1031,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 910,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 601,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
          {
            breakpoint: 401,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          }
        ]
    });
    $(".holder__slider, .shop__slider").slick({
        infinite: true,
        fade: true,                        
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrow"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrow"></img>',
    })


    
    $(".slider-dots__circle").on("mouseover", function() {      
        $(this).addClass("slider-dots__circle--shine");  
        
        let timerId2 = setInterval(() => $(this).removeClass("slider-dots__circle--shine"), 500);
        let timerId1 = setInterval(() => $(this).addClass("slider-dots__circle--shine"), 1000);
        $(".slider-dots__circle").on("mouseout", function() {        
            clearInterval(timerId1);
            clearInterval(timerId2);
            $(this).removeClass("slider-dots__circle--shine");
        });       
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
    });
    
    const summ = () => {
        let summ = $(".nights").val() * $(".summ").data("nights") + ($(".guests").val() - 1) * $(".summ").data("guests");
        $(".summ").html("$" + summ);
    }    

    $(".quantity-button").on("click", function() {
        summ();
    });

    $(".surfboard-box__circle").on("click", function() {
      $(this).toggleClass("active");
    });
    
    $(".menu-btn").on("click", function() {
      $(".menu").toggleClass("active");
    })
    
    new WOW().init();

    const webp = () => { 
      let imagesWebp = document.querySelectorAll('[data-img-webp]');
      for (let i = 0; i < imagesWebp.length; i++) {
        let imgWebp = imagesWebp[i].getAttribute('data-img-webp');
        let count = imagesWebp[i];
        console.log(count)
        if (count.classList.contains('no-webp')) {
          count.style.backgroundImage = 'url(' + imgWebp + ')';
        }
      }
    };

    Modernizr.on('webp', function(result) {
      if (result) {
          $(".surf").addClass("webp");    
          $(".holder.sleep").addClass("webp"); 
          $(".holder").addClass("webp");     
          $(".slider-item").addClass("webp");    
          $(".slider-map").addClass("webp");
          $(".surf-box__wrapper").addClass("webp");
          $(".holder-slider__head").addClass("webp");
          $(".holder-slider__descr").addClass("webp");
          $(".shop").addClass("webp");
      } else {
          $(".surf").addClass("no-webp");    
          $(".holder").addClass("no-webp"); 
          $(".holder.sleep").addClass("no-webp");   
          $(".slider-item").addClass("no-webp");    
          $(".slider-map").addClass("no-webp");
          $(".surf-box__wrapper").addClass("no-webp");
          $(".holder-slider__head").addClass("no-webp");
          $(".holder-slider__descr").addClass("no-webp");
          $(".shop").addClass("no-webp");      
      }
      webp();
    });

    
});
