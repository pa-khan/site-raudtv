$(document).ready(function($) {

	$('.input_tel input').mask('+7 (999) 999-99-99');

	$('.input_sms input').mask('999999',{placeholder:"XXXXXX"});

	$('.input_calendar input').mask('99.99.9999',{placeholder:"дд.мм.гггг"});

	var inputField = $('.search__input input');

	$('.search__example span').click(function() {
		var value = $(this).text(),
				input = $(this).parents('.search').find('.search__input input');
		inputField.val(value);
	});


	var statusBar = $('.slider__status')




	var mainSlider = $('.slider__list'),
			mainSliderNav = $('.slider__nav');


	statusBar.html('<div class="start"></div>');

	mainSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  statusBar.html('<div class="start"></div>')
	});



	mainSlider.slick({
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		asNavFor: mainSliderNav,

	});
	

	mainSliderNav.slick({
		arrows: false,
		slidesToShow: 4,
		vertical: true,
		autoplay: true,
		autoplaySpeed: 5000,
		asNavFor: mainSlider,
		focusOnSelect: true,
		responsive: [{

      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
      }

    }]
	});

	$('.slider__nav .slick-slide').click(function(event) {
		statusBar.addClass('stop')
	});



	var leadersItem = $('.leaders__item'),
			leadersNumber = $('.leaders__status-number'),
			leadersTotal = $('.leaders__status-total'),
			leadersSlider = $('.leaders__list'),
			leadersArrows = $('.leaders__arrows');

	leadersTotal.html(leadersItem.length);
	leadersSlider.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		appendArrows: leadersArrows,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 12" style="enable-background:new 0 0 14 12;" xml:space="preserve"><path style="fill:#6C6C6C;" d="M6.1,0.9c0.5,0.5,0.5,1.3,0,1.8l-1.9,2h8.6C13.4,4.7,14,5.3,14,6s-0.5,1.3-1.2,1.3H4.2l1.9,2 c0.5,0.5,0.5,1.3,0,1.8c-0.5,0.5-1.2,0.5-1.7,0l-4-4.2C0.1,6.6,0,6.3,0,6s0.1-0.7,0.4-0.9l4-4.2C4.8,0.4,5.6,0.4,6.1,0.9z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 12" style="enable-background:new 0 0 14 12;" xml:space="preserve"><path style="fill:#6C6C6C;" d="M9.6,0.9l4,4.2C13.9,5.3,14,5.6,14,6s-0.1,0.7-0.4,0.9l-4,4.2c-0.5,0.5-1.2,0.5-1.7,0c-0.5-0.5-0.5-1.3,0-1.8 l1.9-2H1.2C0.6,7.3,0,6.7,0,6s0.5-1.3,1.2-1.3h8.6l-1.9-2c-0.5-0.5-0.5-1.3,0-1.8C8.4,0.4,9.2,0.4,9.6,0.9z"/></svg></button>',
		responsive: [{

      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
      }

    }]
	})

	$(window).on('load resize', function(event) {
		var windowWidth = $(window).width();
		if (windowWidth > 1020) {
			leadersNumber.html('4')
		}
		if (windowWidth <= 1020) {
			$('.reg__subtitle').click(function(event) {
				if (!$(this).hasClass('reg__subtitle_selected')) {
					$('.reg__subtitle').removeClass('reg__subtitle_selected');
					$(this).addClass('reg__subtitle_selected')
					$('.reg__new').slideToggle(500);
					$('.reg__auth').slideToggle(500);
				} 
			});

		}
		if (windowWidth > 1020){
			$('.reg__new').removeAttr('style')
			$('.reg__auth').removeAttr('style')
		}
	});


	$('.category__parmetry-title').click(function(event) {
		$(this).toggleClass('category__parmetry-title_click');
		$('.category__parmetry-wrap').slideToggle(500);
		$(".nano").nanoScroller();
	});

	$('.product__btn').click(function(event) {
		var product = $(this).parents('.product');

		if (!($(this).hasClass('product__btn_disabled'))) {
			product.addClass('product_add');
		}
	});

	var steps = $('.card__steps-wrap'),
			phoneNumberHTML = $('.phone-number'),
			stepsWrap = $('.card__steps-wrap'),
			stepsItem = $('.card__step'),
			stepsItemCount = stepsItem.length;
				

	function stepsWidth() {
		var stepsItemWidth = stepsItem.width();

		return stepsItemWidth;

	}

	stepsWrap.width(stepsWidth() * stepsItemCount);

	$('.card__steps .btn').click(function(event) {
		var step = $(this).parents('.card__step'),
				stepIndex = step.index() + 1,
				input = step.find('.input'),
				inputField = input.find('input');

		if (step.hasClass('card__step-phone')) {
			var phoneNumber = inputField.val();
			phoneNumberHTML.html(phoneNumber);
			console.log(phoneNumber);
			if (inputField.val() != '+7 (999) 999-99-99') {
				stepStatus('phone', 'show');
				input.addClass('input_error');
			} else {
				stepStatus('phone', 'hide');
				input.removeClass('input_error');
				stepSlide('left', stepsWidth(), stepIndex)
			}
			
		}
		if (step.hasClass('card__step-sms')) {
			if (inputField.val() != '999999') {
				stepStatus('sms', 'show');
				input.addClass('input_error');
			} else {
				stepStatus('phone', 'hide');
				input.removeClass('input_error');
				stepStatus('sms', 'hide');
				stepSlide('left', stepsWidth(), stepIndex);
			}
		}
	});


	function stepStatus(name, status) {
		var element = $('.card__desc-false-' + name);
		if (status == 'show') {
			element.slideDown(300);
		} else if(status == 'hide'){
			element.slideUp(300);
		}
		
	}
	function stepSlide(status, widthBlock, count) {
		if (status == 'left') {
			steps.css('transform', 'translateX(-'+ (widthBlock * count) + 'px');
		} else if(status == 'right'){
			steps.css('transform', 'translateX('+ (widthBlock * count) + 'px');
		}
	}

	$('.card__btn-reset').click(function(event) {
		steps.css('transform', 'translateX(0)');
	});


	$('.reviews__wrap').slick({
		autoplay: true,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 12" style="enable-background:new 0 0 14 12;" xml:space="preserve"><path style="fill:#6C6C6C;" d="M6.1,0.9c0.5,0.5,0.5,1.3,0,1.8l-1.9,2h8.6C13.4,4.7,14,5.3,14,6s-0.5,1.3-1.2,1.3H4.2l1.9,2 c0.5,0.5,0.5,1.3,0,1.8c-0.5,0.5-1.2,0.5-1.7,0l-4-4.2C0.1,6.6,0,6.3,0,6s0.1-0.7,0.4-0.9l4-4.2C4.8,0.4,5.6,0.4,6.1,0.9z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 12" style="enable-background:new 0 0 14 12;" xml:space="preserve"><path style="fill:#6C6C6C;" d="M9.6,0.9l4,4.2C13.9,5.3,14,5.6,14,6s-0.1,0.7-0.4,0.9l-4,4.2c-0.5,0.5-1.2,0.5-1.7,0c-0.5-0.5-0.5-1.3,0-1.8 l1.9-2H1.2C0.6,7.3,0,6.7,0,6s0.5-1.3,1.2-1.3h8.6l-1.9-2c-0.5-0.5-0.5-1.3,0-1.8C8.4,0.4,9.2,0.4,9.6,0.9z"/></svg></button>',
	
	})
	$('.brands__list').slick({
		slidesToShow: 6,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 12" style="enable-background:new 0 0 14 12;" xml:space="preserve"><path style="fill:#6C6C6C;" d="M6.1,0.9c0.5,0.5,0.5,1.3,0,1.8l-1.9,2h8.6C13.4,4.7,14,5.3,14,6s-0.5,1.3-1.2,1.3H4.2l1.9,2 c0.5,0.5,0.5,1.3,0,1.8c-0.5,0.5-1.2,0.5-1.7,0l-4-4.2C0.1,6.6,0,6.3,0,6s0.1-0.7,0.4-0.9l4-4.2C4.8,0.4,5.6,0.4,6.1,0.9z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 12" style="enable-background:new 0 0 14 12;" xml:space="preserve"><path style="fill:#6C6C6C;" d="M9.6,0.9l4,4.2C13.9,5.3,14,5.6,14,6s-0.1,0.7-0.4,0.9l-4,4.2c-0.5,0.5-1.2,0.5-1.7,0c-0.5-0.5-0.5-1.3,0-1.8 l1.9-2H1.2C0.6,7.3,0,6.7,0,6s0.5-1.3,1.2-1.3h8.6l-1.9-2c-0.5-0.5-0.5-1.3,0-1.8C8.4,0.4,9.2,0.4,9.6,0.9z"/></svg></button>',
		responsive: [{

      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
      }}, {
      	breakpoint: 470,
      	settings: {
        slidesToShow: 2
      }

    }]
	})

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('checkbox');
	valueElementForm('radio');
	valueElementForm('method-pay__item');
	

	$(".nano").nanoScroller();


	$('.parameter__head').click(function(event) {
		var parameter = $(this).parents('.parameter'),
				parameterBody = parameter.find('.parameter__body');
		parameter.toggleClass('parameter_close');
		parameterBody.slideToggle(300)
		
	});

	$('select').selectmenu();


	var productSliderItem = $('.product-page__img'),
			productSliderNav = $('.product-page__imgs');

	productSliderNav.slick({
		arrows: false,
		slidesToShow: 3,
		vertical: true,
		asNavFor: productSliderItem,
		focusOnSelect: true
	})
	productSliderItem.slick({
		arrows: false,
		fade: true,
		asNavFor: productSliderNav,
	})

	$('.favorit-btn').click(function(event) {
		$(this).toggleClass('favorit-btn_add');
	});

	$('.reviews-col__text').each(function(index, el) {
		var textHeight = $(this).height(),
				textButton = $(this).find('reviews-col__more');


		if (textHeight > 60) {
			$(this).addClass('reviews-col__text_more')
		}
		
	});

	$('.reviews-col__more').click(function() {
		var text = $(this).parents('.reviews-col__text');
		$(this).hide();
		text.addClass('reviews-col__text_show');
	});

	$('.feedback__stars svg').hover(function() {
		$(this).find('path').css('fill', '#fdcd2b');
		$(this).prevAll().find('path').css('fill', '#fdcd2b');
	}, function() {
		$(this).find('path').css('fill', '#d6d6d6');
		$(this).prevAll().find('path').css('fill', '#d6d6d6');
	});

	var feedback = $('.feedback'),
			feedbackWrap = $('.feedback__wrap')
			successfully = $('.successfully'),
			feedbackBtnAdd = $('.reviews-col__btn-add');
			feedbackBtnSlideUp = $('.reviews-col__btn-slideUp')
	feedbackBtnAdd.click(function(event) {
		feedback.slideDown(300);
		feedbackBtnAdd.hide();
		feedbackBtnSlideUp.css('display', 'inline-block');
	});

	feedbackBtnSlideUp.click(function(event) {
		feedback.slideUp(300);
		feedbackBtnAdd.css('display', 'inline-block');
		feedbackBtnSlideUp.hide();
	});


	$('.feedback__btn, .successfully__btn').click(function(event) {
		feedbackWrap.slideToggle(300);
		successfully.slideToggle(300);
	});


	$('.share__btn').click(function(event) {
		$(this).toggleClass('share__btn_click');
	});

	$('.faq__item').click(function(event) {
		var faqText = $(this).find('.faq__text');

		$(this).toggleClass('faq__item_open');
		faqText.slideToggle(300);
	});


	$('.order__toggle span').click(function() {
		var parent = $(this).parents('.order__toggle'),
				list = $(this).parents('.order').find('.order__foot-list');
		parent.toggleClass('order__toggle_click');
		list.slideToggle(500);
	});



	$('.cart-totals__btn-toggle').click(function() {
		$(this).toggleClass('cart-totals__btn-toggle_click');
		$('.cart-totals__list').slideToggle(500);
	});


	var faqForm = $('.faq__form');


	$('.faq__head-btn').click(function() {
		$(this).toggleClass('faq__head-btn_click');
		faqForm.slideToggle(300);
	});

	$('.messages__btn').click(function() {
		var full = $(this).parents('.messages__item').find('.messages__text-full');
		$(this).toggleClass('messages__btn_click');
		full.slideToggle(300);
	});


	var cartSlideBtn = $('.cart-list__more-btn'),
			cartList = $('.cart-list__list'),
			cartItemLength = $('.cart-list__item').length,
			cartNum = $('.cart-list__more-number span'),
			cartMore = $('.cart-list__more');



	cartSlideBtn.click(function() {
		$('.cart-list__item').each(function(index, el) {
			if (index > 3) {
				$(this).slideToggle(300)
			}
		});
		$(this).toggleClass('cart-list__more-btn_click');
		// cartList.slideToggle(300);
	});

	console.log(cartItemLength);

	if (cartItemLength > 5) {
		cartNum.html(cartItemLength - 4)
	} else{
		cartMore.hide();
	}
	// $('.cart-list__more span')

	var calendarField = $('.step-address__item_time .step-address__head span');

	$('.element_calendar .element__input input').datepicker({
    firstDay: 1,
    dateFormat : 'dd.mm.yy',
    changeMonth: true,
    changeYear: true,
    yearRange: "1930:2002",
    firstDay: 1,
    monthNamesShort : [ "Янв.", "Фев.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Ноя.", "Дек." ],
		monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		dayNamesMin: [ "вс.", "пн.", "вт.", "ср.", "чт.", "пт.", "сб." ]
   });

	$('.calendar').datepicker({
		minDate: new Date(),
		firstDay: 1,
		dateFormat : 'MM, dd',
		monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		dayNamesMin: [ "вс.", "пн.", "вт.", "ср.", "чт.", "пт.", "сб." ],
		onSelect: function(dateText, inst) {
      calendarField.html('на ' + dateText);
    }
	});

	var calendarDate = $('.calendar').datepicker().val();

	calendarField.html('на ' + calendarDate)

	var promocodes = $('.promocode__wrap-list'),
			promocodesItem = $('.promocode__step'),
			promocodesItemCount = promocodesItem.length;

	function promocodesWidth() {
		var promocodesItemWidth = promocodesItem.width();

		return promocodesItemWidth;

	}

	promocodes.width(promocodesWidth() * promocodesItemCount);

	$('.promocode__btn').click(function(event) {
		var step = $(this).parents('.promocode__step'),
				stepIndex = step.index() + 1,
				input = step.find('.input'),
				inputField = input.find('input');

		if (step.hasClass('promocode__step-first')) {
			if (inputField.val() != '999999999') {
				stepStatusPromo('false', 'show');
				input.addClass('input_error');
			} else {
				stepStatusPromo('false', 'hide');
				input.removeClass('input_error');
				stepStatusPromo('true', 'show');
				stepSlidePromo('left', promocodesWidth(), stepIndex);
			}
			
		}
	});
	function stepStatusPromo(name, status) {
		var element = $('.promocode__desc-' + name);
		if (status == 'show') {
			element.slideDown(300);
		} else if(status == 'hide'){
			element.slideUp(300);
		}
		
	}
	function stepSlidePromo(status, widthBlock, count) {
		console.log('widthBlock = ' + widthBlock)
		if (status == 'left') {
			promocodes.css('transform', 'translateX(-'+ (widthBlock * count) + 'px');
		} else if(status == 'right'){
			promocodes.css('transform', 'translateX('+ (widthBlock * count) + 'px');
		}
	}
	$('.promocode__btn_reset').click(function(event) {
		promocodes.css('transform', 'translateX(0)');
		stepStatusPromo('true', 'hide');
	});




	$('.panel__item-drop > a').click(function(event) {

		var li = $(this).parents('.panel__item-drop'),
				drop = li.find('ul');
		event.preventDefault();
		li.toggleClass('panel__item-drop_open');
		drop.slideToggle(300);

	});


	$('.nav__item-drop > a').click(function(event) {

		var li = $(this).parents('.nav__item-drop'),
				drop = li.find('.nav__sub');
		event.preventDefault();
		li.toggleClass('nav__item_open');
		drop.slideToggle(500);

	});


	var mobileNav = $('.panel__nav_mobile'),
			mobileBtn = $('.mobile-btn'),
			catalogNav = $('.nav__wrap'),
			catalogBtn = $('.nav__btn'); 
	
	mobileBtn.click(function(event) {
		$(this).toggleClass('mobile-btn_click');
		mobileNav.slideToggle(300)
	});

	catalogBtn.click(function(event) {
		$(this).toggleClass('nav__btn_click');
		catalogNav.slideToggle(300)
	});


	$('.lk-nav__btn').click(function(event) {
		$('.lk-nav_mobile').toggleClass('lk-nav_open');
	});

	$('.page-nav__btn').click(function(event) {
		$('.page-nav').toggleClass('page-nav_open');
	});


	// $('.incremnet')
	


	$('.inrement__input').on('keydown', function(e){
	  if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
	    return false;
	  };
	})

	$('.inrement__input input').attr('maxlength', '2');


	$('.inrement__btn_plus').click(function() {
		var input = $(this).siblings('.inrement__input').find('input'),
				parent = $(this).parents('.inrement'),
				friend = $(this).siblings('.inrement__btn'),
				inputVal = input.val();
		if (!parent.hasClass('inrement_disabled')) {
			if (inputVal < 99) {
				input.val(Number(inputVal) + 1)
				$(this).addClass('inrement__btn_green');
			}
			if (inputVal == 98) {
				$(this).removeClass('inrement__btn_green');
			}
		}
		
	});

	$('.inrement__btn_plus').addClass('inrement__btn_green');

	$('.inrement__btn_minus').click(function() {
		var input = $(this).siblings('.inrement__input').find('input'),
				parent = $(this).parents('.inrement'),
				friend = $(this).siblings('.inrement__btn');
				inputVal = input.val();
		if (!parent.hasClass('inrement_disabled')) {
			if (inputVal > 1) {
				input.val(Number(inputVal) - 1);
				$(this).addClass('inrement__btn_green');
				friend.addClass('inrement__btn_green');
			}
			if (inputVal == 2) {
				$(this).removeClass('inrement__btn_green');
			}
		}
	});

});
