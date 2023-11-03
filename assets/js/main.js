/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

	// add
	const slogan = "안녕하세요.\n 개발자 김광호 입니다.";
	const subTxt = "어쩌구 저쩌구 더 쓸 내용이 있으면 여기다가 쓸 것.\n 이러쿵 저러쿵 나중에 제대로 안 고칠 시 사회적 죽음"
	const text1 = document.querySelector("#typing1");
	const text2 = document.querySelector("#typing2");
	let i = 0;
	let j = 0;

	function typing(){
		if (i < slogan.length){
			let txt = slogan[i++];
			text1.innerHTML += txt=== "\n" ? "<br/>": txt;
		} else if(i == slogan.length) {
			$('#cursor1').html('');
			i++
		}
		if(i > slogan.length && j < subTxt.length){
			$('#cursor2').html('|').addClass('blink');
			let txt = subTxt[j++];
			text2.innerHTML += txt=== "\n" ? "<br/>": txt;
		} else if (j == subTxt.length){
			$('.button').removeClass('hide');
			clearInterval(interval)
		}
	}
	var interval = setInterval(typing, 150)

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (window.innerWidth > 961) {
			if (scroll <= 500) {
				$('#main').addClass('con-open');
				$('#footer').addClass('con-open');
				$('#header').addClass('head-open');
			}
			if (scroll > 500) {
				$('#main').removeClass('con-open');
				$('#footer').removeClass('con-open');
				$('#header').removeClass('head-open');
			}
		}
	})


	var card = $('.card');

	function flipper (e) {
		const target = e.currentTarget
		target.style.transform = "rotateX(180deg)"
		target.style.boxShadow = "5px -5px 20px #999"
		target.addEventListener("click", innerFlipper)
	}

	function innerFlipper (e) {
		const target = e.currentTarget
		target.style.transform = "rotateX(0deg)"
		target.style.boxShadow = "5px 5px 20px #999"
		target.addEventListener("click", flipper)
		target.removeEventListener("click", innerFlipper)
	}

	card.click(flipper);



})(jQuery);