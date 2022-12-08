(function (window, document, $, undefined) {
    'use strict';

    let eduvibeJs = {
        i: function (e) {
            eduvibeJs.d();
            eduvibeJs.methods();
        },
        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },

        methods: function (e) {
            eduvibeJs.salActive();
            eduvibeJs.magnigyPopup();
            eduvibeJs.slickSlider();
            eduvibeJs.headerSticky();
            eduvibeJs.counterUp();
            eduvibeJs.productHoverTilt();
            eduvibeJs.masonryActivation();
            eduvibeJs.lightboxActivation();
            eduvibeJs.boxHover();
            eduvibeJs.boxHoverSlider();
            eduvibeJs.pricingPlan();
            eduvibeJs.wowActivation();
            eduvibeJs.qtyBtn();
            eduvibeJs.accordionBtnTwo();
            eduvibeJs.bannerAnimation();
            eduvibeJs.popupMobileMenu();
            eduvibeJs.searchPopup();
            eduvibeJs.bgMarque();
            eduvibeJs.filterClickButton();
            eduvibeJs.contactForm();
        },

        bgMarque: function () {
            $('.background-marque').each(function () {
                var t = 0;
                var i = 1;
                var $this = $(this);
                setInterval(function () {
                    t += i;
                    $this.css('background-position-x', -t + "px");
                }, 10);
            });
        },
        
        salActive: function () {
            sal({
                threshold: 0.01,
                once: true,
            });
        },

        magnigyPopup: function () {
            $(document).on('ready', function () {
                $('.video-popup-activation').magnificPopup({
                    type: 'iframe'
                });
            });
        },

        
        slickSlider: function () {
            $('.testimonial-item-1').slick({
                dots: true,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000
            });

            $('.testimonial-card-activation-1').slick({
                dots: false,
                infinite: true,
                arrows: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>'
            });

            $('.eduvibe-home-five-testimonial-activation').slick({
                dots: true,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000
            });

            $('.brand-activation').slick({
                dots: false,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 5,
                        }
                    }, 
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                        }
                    }, 
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    }, 
                ]
            });

            $('.testimonial-item-3').slick({
                dots: true,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }, 
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, 
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });


            $('.course-activation-3').slick({
                dots: true,
                infinite: true,
                arrows: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 4000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }, 
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, 
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
                
            });

            $('.testimonial-nav-activation').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                asNavFor: '.testimonial-nav-button'
            });

            $('.testimonial-nav-button').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.testimonial-nav-activation',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 4000,
            });

            $('.course-activation-item-2').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                nav: false,
                autoplay: false,
                autoplaySpeed: 4000,
                autoplay: true,
                autoplaySpeed: 4000
            });

            $('.service-activation-item5').slick({
                dots: false,
                infinite: true,
                arrows: true,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: false,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    }, 
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    }, 
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }, 
                ]
            });

            $('.team-activation-01').slick({
                dots: false,
                infinite: true,
                arrows: true,
                dots: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 3,
                centerMode: false,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    }, 
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                        }
                    }, 
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }, 
                ]
            });

            $('.team-activation-02').slick({
                dots: false,
                infinite: true,
                arrows: true,
                dots: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 2,
                centerMode: false,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                        }
                    }, 
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }, 
                ]
            });

            $('.team-activation-03').slick({
                dots: false,
                infinite: true,
                arrows: true,
                dots: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 2,
                centerMode: false,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    }, 
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                        }
                    }, 
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }, 
                ]
            });

            $('.eduvibe-course-details-related-course-carousel').slick({
                dots: false,
                infinite: true,
                arrows: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            $('.eduvibe-course-carousel-page-with-dots').slick({
                dots: true,
                infinite: true,
                arrows: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            $('.eduvibe-event-one-carousel-wrapper').slick({
                dots: true,
                infinite: true,
                arrows: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        },

        headerSticky: function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header-sticky').addClass('sticky')
                } else {
                    $('.header-sticky').removeClass('sticky')
                }
            })
        },

        counterUp: function () {
            var odo = $('.odometer');
            odo.each(function() {
                $('.odometer').appear(function(e) {
                    var countNumber = $(this).attr('data-count');
                    $(this).html(countNumber);
                });
            });
        },

        productHoverTilt: function () {
            if ( $.isFunction( $.fn.tilt ) ) {
                $( '.eduvibe-single-product-thumb-wrapper' ).tilt( {
                    maxTilt: 30,
                    perspective: 1000,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                    speed: 500,
                    glare: false,
                    maxGlare: 0.3,
                    scale: 1.04
                } );
            }
        },

        masonryActivation: function name(params) {
            $(window).load(function () {
                $('.masonary-wrapper-activation').imagesLoaded(function () {
                    // filter items on button click
                    $('.isotop-filter').on('click', 'button', function () {
                        var filterValue = $(this).attr('data-filter');
                        $(this).siblings('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                        $grid.isotope({
                            filter: filterValue
                        });
                    });

                    // init Isotope
                    var $grid = $('.mesonry-list').isotope({
                        percentPosition: true,
                        transitionDuration: '0.7s',
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: '.resizer',
                        }
                    });
                });
            })
        },

        lightboxActivation: function() {
            lightGallery(document.getElementById('animated-thumbnials'), {
                thumbnail: true,
                animateThumb: false,
                showThumbByDefault: false
            });
        },

        boxHover: function(){
            jQuery( '.edu-instructor-3-visible, .eduvibe-hover-item-visible' ).on( 'mouseenter', function(){
                let selector = jQuery(this).parent().parent();
                selector.find( '.edu-instructor-3-visible, .eduvibe-hover-item-visible' ).removeClass( 'eduvibe-hover-active' );
                jQuery(this).addClass( 'eduvibe-hover-active' );
            });
        },

        boxHoverSlider: function(){
            jQuery( '.edu-instructor-3-slider-visible' ).on( 'mouseenter', function(){
                let selector = jQuery(this).parent().parent().parent();
                selector.find( '.edu-instructor-3-slider-visible' ).removeClass( 'eduvibe-hover-active' );
                jQuery(this).addClass( 'eduvibe-hover-active' );
            });
        },

        pricingPlan: function () {
            var yearlySelectBtn = $('#yearly-plan-btn'),
                monthlySelectBtn = $('#monthly-plan-btn'),
                monthlyPrice = $('.monthly-pricing'),
                yearlyPrice = $('.yearly-pricing'),
                buttonSlide = $('#pricing-checkbox');
            
            $(monthlySelectBtn).on('click', function() {
                buttonSlide.prop('checked', true);
                $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'block');
                yearlyPrice.css('display', 'none');

            });
            
            $(yearlySelectBtn).on('click', function() {
                buttonSlide.prop('checked', false);
                $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'none');
                yearlyPrice.css('display', 'block');
            });

            $(buttonSlide).change(function() {
                if ($('input[id="pricing-checkbox"]:checked').length > 0) {
                    monthlySelectBtn.addClass('active');
                    yearlySelectBtn.removeClass('active');
                    monthlyPrice.css('display', 'block');
                    yearlyPrice.css('display', 'none');

                }else {
                    yearlySelectBtn.addClass('active');
                    monthlySelectBtn.removeClass('active');
                    monthlyPrice.css('display', 'none');
                    yearlyPrice.css('display', 'block');
                    
                }
            });
        },


        wowActivation: function () {
            new WOW().init();
        },

        qtyBtn: function () {
            $('.pro-qty').prepend('<span class="dec qtybtn icon-arrow-down-s-fill"></span>');
            $('.pro-qty').append('<span class="inc qtybtn icon-arrow-up-s-fill"></span>');
            $('.qtybtn').on('click', function () {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 0;
                    }
                }
                $button.parent().find('input').val(newVal);
            });
        },

        accordionBtnOne: function () {
            $('.edu-accordion-01 button[aria-expanded="true"]', function() {
                $('.edu-accordion-01 button[aria-expanded="true"]').parent().parent().addClass('bg-active');
            });

            $('.edu-accordion-01 button[aria-expanded="false"]', function() {
                $('.edu-accordion-01 button[aria-expanded="false"]').parent().parent().removeClass('bg-active');
            });

            $('.edu-accordion-01').on('click', 'button[aria-expanded="true"]', function() {
                $(this).parent().parent().addClass('bg-active');
                $('.edu-accordion-01 button[aria-expanded="false"]').parent().parent().removeClass('bg-active');
            });

            $('.edu-accordion-01').on('click', 'button[aria-expanded="false"]', function() {
                $(this).parent().parent().removeClass('bg-active');
                $('.edu-accordion-01 button[aria-expanded="true"]').parent().parent().addClass('bg-active');
            });

        },

        accordionBtnTwo: function () {
            $('.edu-accordion-02 button[aria-expanded="true"]', function() {
                $('.edu-accordion-02 button[aria-expanded="true"]').parent().parent().addClass('bg-active');
            });

            $('.edu-accordion-02 button[aria-expanded="false"]', function() {
                $('.edu-accordion-02 button[aria-expanded="false"]').parent().parent().removeClass('bg-active');
            });


            
            $('.edu-accordion-02').on('click', 'button[aria-expanded="true"]', function() {
                $(this).parent().parent().addClass('bg-active');
                $('.edu-accordion-02 button[aria-expanded="false"]').parent().parent().removeClass('bg-active');
            });

            $('.edu-accordion-02').on('click', 'button[aria-expanded="false"]', function() {
                $(this).parent().parent().removeClass('bg-active');
                $('.edu-accordion-02 button[aria-expanded="true"]').parent().parent().addClass('bg-active');
            });

        },

        bannerAnimation: function () {
            $('.scene').each(function () {
                new Parallax($(this)[0]);
            });
        },

        popupMobileMenu: function (e) {
            $('.hamberger-button').on('click', function (e) {
                $('.popup-mobile-menu').addClass('active');
            });
            $('.close-menu').on('click', function (e) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a').siblings('.submenu, .rn-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a').removeClass('open')
            });
            $('.popup-mobile-menu .mainmenu .has-droupdown > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu, .rn-megamenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open')
            })
            $('.popup-mobile-menu').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('active') && $('.popup-mobile-menu .mainmenu .has-droupdown > a').siblings('.submenu, .rn-megamenu').removeClass('active').slideUp('400') && $('.popup-mobile-menu .mainmenu .has-droupdown > a').removeClass('open');
            });
        },

        searchPopup: function () {
            $('.search-trigger').on('click', function () {
                $('.edu-search-popup').addClass('open')
            })
            $('.close-trigger').on('click', function () {
                $('.edu-search-popup').removeClass('open')
            })
            $( '.edu-search-popup' ).on( 'click', function () {
                $('.edu-search-popup').removeClass( 'open' );
            } )
            $('.edu-search-popup .eduvibe-search-popup-field').on('click', function (e) {
                e.stopPropagation();
            })
        },

        filterClickButton: function () {
            $('#slider-range').slider({
                range: true,
                min: 10,
                max: 500,
                values: [100, 300],
                slide: function (event, ui) {
                    $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
                }
            });
            $('#amount').val('$' + $('#slider-range').slider('values', 0) +
                " - $" + $('#slider-range').slider('values', 1));
        },

        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
				e.preventDefault();
				var _self = $(this);
				var __selector = _self.closest('input,textarea');
				_self.closest('div').find('input,textarea').removeAttr('style');
				_self.find('.error-msg').remove();
				_self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
				var data = $(this).serialize();
				$.ajax({
					url: 'mail.php',
					type: "post",
					dataType: 'json',
					data: data,
					success: function (data) {
						_self.closest('div').find('button[type="submit"]').removeAttr('disabled');
						if (data.code == false) {
							_self.closest('div').find('[name="' + data.field + '"]');
							_self.find('.rn-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
						} else {
							$('.error-msg').hide();
							$('.form-group').removeClass('focused');
							_self.find('.rn-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
							_self.closest('div').find('input,textarea').val('');

							setTimeout(function () {
								$('.success-msg').fadeOut('slow');
							}, 5000);
						}
					}
				});
			});
        }
    }

    eduvibeJs.i();

})(window, document, jQuery)


