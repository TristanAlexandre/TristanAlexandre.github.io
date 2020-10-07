
var minWidth200px = window.matchMedia("(min-width:200px)");
var minWidth640px = window.matchMedia("(min-width:640px)");
var minWidth1024px = window.matchMedia("(min-width:1024px)");

/*$(window).on('load', function () {
	
});*/


$(document).ready(() => {


	var iframe = $('#videoLoaded');
    var player = new Vimeo.Player(iframe);

    

	window.sr = ScrollReveal({ /*reset: true*/ });
	//*******************RESPONSIVE ANIMATIONS************************//
	//----------SMALL SIZE SCREEN ANIM
	if (minWidth200px.matches) {
	//hide loading when all is loaded
	$(".loader-wrapper").css('display', 'none');
	document.querySelector("body").style.overflow = "scroll";
		sr.reveal('h1.banner', {
			duration: 1000,
			origin: 'top',
			distance: '5rem',
			viewFactor: 1,
		});
		sr.reveal('.lead', {
			duration: 1000,
			origin: 'top',
			distance: '5rem',
			delay: 500,
			viewFactor: 1,
		});
		sr.reveal('div.timeline', {
			duration: 700,
			origin: 'bottom',
			distance: '5rem',
			viewFactor: 0,
			interval: 100,
			rotate: {
				y: 100,
			},
			scale: 0.75
		});
		sr.reveal('li.media', {
			duration: 700,
			origin: 'bottom',
			distance: '5rem',
			viewFactor: 0,
			interval: 100
		});
		sr.reveal('h1.h1Bio', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
		});
		sr.reveal('h3.h1Bio', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			delay: 300
		});
		sr.reveal('.colBioPic', {
			duration: 700,
			origin: 'bottom',
			distance: '5rem',
			viewFactor: 0,
			delay: 700
		});
		sr.reveal('hr', {
			duration: 1000,
			origin: 'top',
			distance: '5rem',
			viewFactor: 1,
		});
		sr.reveal('h1.text-center', {
			duration: 1000,
			origin: 'top',
			distance: '3rem',
			viewFactor: 1,
		});
		sr.reveal('div.img-hover-zoom', {
			duration: 700,
			origin: 'bottom',
			distance: '5rem',
			viewFactor: 0,
		});
		sr.reveal('em', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 1,
			scale: 0.75,
			delay: 600
		});
		sr.reveal('img.timelinePic', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			rotate: {
				y: 100,
			},
			scale: 0.75,
			delay: 600
		});
		sr.reveal('.bioP1', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
		});
		sr.reveal('.bioP2', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			delay: 300
		});
		sr.reveal('.hrBioEnd', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			delay: 300
		});
	
	};
	if (minWidth640px.matches) {
		//hide loading when all is loaded
		$(".loader-wrapper").css('display', 'none');
		document.querySelector("body").style.overflow = "scroll";
		sr.reveal('h1.banner', {
			duration: 1000,
			origin: 'top',
			distance: '5rem',
			viewFactor: 1,
		});
		sr.reveal('.lead', {
			duration: 1000,
			origin: 'top',
			distance: '5rem',
			delay: 500,
			viewFactor: 1,
		});
		sr.reveal('div.timeline', {
			duration: 700,
			origin: 'bottom',
			distance: '5rem',
			viewFactor: 0,
			interval: 100,
			rotate: {
				y: 100,
			},
			scale: 0.75
		});
		sr.reveal('li.media', {
			duration: 700,
			origin: 'bottom',
			distance: '5rem',
			viewFactor: 0,
			interval: 100
		});
		sr.reveal('h1.h1Bio', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
		});
		sr.reveal('h3.h1Bio', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			delay: 300
		});
		sr.reveal('.colBioPic', {
			duration: 700,
			origin: 'bottom',
			distance: '5rem',
			viewFactor: 0,
			delay: 700
		});
		sr.reveal('hr', {
			duration: 1000,
			origin: 'top',
			distance: '5rem',
			viewFactor: 1,
		});
		sr.reveal('h1.text-center', {
			duration: 1000,
			origin: 'top',
			distance: '3rem',
			viewFactor: 1,
		});
		sr.reveal('div.img-hover-zoom', {
			duration: 700,
			origin: 'bottom',
			distance: '5rem',
			viewFactor: 0,
		});
		sr.reveal('em', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 1,
			scale: 0.75,
			delay: 600
		});
		sr.reveal('img.timelinePic', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			rotate: {
				y: 100,
			},
			scale: 0.75,
			delay: 600
		});
		sr.reveal('.bioP1', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
		});
		sr.reveal('.bioP2', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			delay: 300
		});
		sr.reveal('.hrBioEnd', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			delay: 300
		});
	};
	//------LARGE SIZE SCREEN ANIM
	if (minWidth1024px.matches) {
		player.on('play', function() {
			//hide loading when all is loaded
				$(".loader-wrapper").css('display', 'none');
				document.querySelector("body").style.overflow = "scroll";
		});
		//banner anim
		sr.reveal('h1.banner', {
			duration: 1000,
			origin: 'left',
			distance: '5rem',
			viewFactor: 1,
		});
		sr.reveal('.lead', {
			duration: 1000,
			origin: 'left',
			distance: '5rem',
			delay: 500,
			viewFactor: 1,
		});
		sr.reveal('hr', {
			duration: 1000,
			origin: 'top',
			distance: '5rem',
			viewFactor: 1,
		});
		sr.reveal('h1.text-center', {
			duration: 1000,
			origin: 'top',
			distance: '3rem',
			viewFactor: 1,
		});
		sr.reveal('div.img-hover-zoom', {
			duration: 700,
			origin: 'bottom',
			distance: '5rem',
			viewFactor: 0,
		});
		sr.reveal('div.timeline', {
			duration: 700,
			origin: 'left',
			distance: '5rem',
			viewFactor: 0,
			interval: 100,
			rotate: {
				y: 100,
			},
			scale: 0.75
		});
		sr.reveal('em', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 1,
			scale: 0.75,
			delay: 600
		});
		sr.reveal('img.timelinePic', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			rotate: {
				y: 100,
			},
			scale: 0.75,
			delay: 600
		});
		sr.reveal('li.media', {
			duration: 700,
			origin: 'right',
			distance: '5rem',
			viewFactor: 0,
			interval: 100
		});
		sr.reveal('h1.h1Bio', {
			duration: 700,
			origin: 'left',
			distance: '5rem',
			viewFactor: 0,
		});
		sr.reveal('h3.h1Bio', {
			duration: 700,
			origin: 'left',
			distance: '5rem',
			viewFactor: 0,
			delay: 300
		});
		sr.reveal('.bioP1', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
		});
		sr.reveal('.bioP2', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			delay: 300
		});
		sr.reveal('.hrBioEnd', {
			duration: 700,
			origin: 'top',
			distance: '5rem',
			viewFactor: 0,
			delay: 300
		});
		sr.reveal('.colBioPic', {
			duration: 700,
			origin: 'left',
			distance: '5rem',
			viewFactor: 0,
			delay: 700
		});
	
	}

	//hide & show navbar by scrolling
	$(window).scroll(function () {

		if ($(this).scrollTop() < 60) {
			$('nav').css('visibility', 'hidden');
			$('nav').css('opacity', '0');
		}
		if ($(this).scrollTop() > 60) {
			$('nav').css('visibility', 'visible');
			$('nav').css('opacity', '1');
		}
	});

	$(window).scroll(function () {
		//bar de scroll timeline navbar
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	});

	//change copyrights date to current
	var copyrightYear = document.getElementById("copyrights");
	copyrightYear.innerHTML = new Date().getFullYear();

	//make the video stop after closing the modal
	$(function () {
		$('.modal').on('hidden.bs.modal', function (e) {
			$iframe = $(this).find("iframe");
			$iframe.attr("src", $iframe.attr("src"));
		});
	});

	//smooth scroll to hash
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

	//Prevent body scroll when modal is open, restore scroll when modal closed
	$('.modal').on('shown.bs.modal', function (e) {
		e.preventDefault();
		$('body').css('overflow', 'hidden');
	});

	$('.modal').on('hidden.bs.modal', function (e) {
		e.preventDefault();
		$('body').css('overflow', 'scroll');
	});

	//collapse navbar when cliked outside
	$(function () {
		$(document).click(function (event) {
			$('.navbar-collapse').collapse('hide');
		});
	});

	/*TIMELINE************************************************************************************************/
	var timelines = $('.cd-horizontal-timeline'),
		eventsMinDistance = 70;

	(timelines.length > 0) && initTimeline(timelines);

	function initTimeline(timelines) {
		timelines.each(function () {
			var timeline = $(this),
				timelineComponents = {};
			//cache timeline components 
			timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
			timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
			timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
			timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
			timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
			timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
			timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
			timelineComponents['eventsContent'] = timeline.children('.events-content');

			//assign a left postion to the single events along the timeline
			setDatePosition(timelineComponents, eventsMinDistance);
			//assign a width to the timeline
			var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
			//the timeline has been initialize - show it
			timeline.addClass('loaded');

			//detect click on the next arrow
			timelineComponents['timelineNavigation'].on('click', '.next', function (event) {
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'next');
			});
			//detect click on the prev arrow
			timelineComponents['timelineNavigation'].on('click', '.prev', function (event) {
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'prev');
			});
			//detect click on the a single event - show new event content
			timelineComponents['eventsWrapper'].on('click', 'a', function (event) {
				event.preventDefault();
				timelineComponents['timelineEvents'].removeClass('selected');
				$(this).addClass('selected');
				updateOlderEvents($(this));
				updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
				updateVisibleContent($(this), timelineComponents['eventsContent']);
			});

			//on swipe, show next/prev event content
			timelineComponents['eventsContent'].on('swipeleft', function () {
				var mq = checkMQ();
				(mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'next');
			});
			timelineComponents['eventsContent'].on('swiperight', function () {
				var mq = checkMQ();
				(mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'prev');
			});

			//keyboard navigation
			$(document).keyup(function (event) {
				if (event.which == '37' && elementInViewport(timeline.get(0))) {
					showNewContent(timelineComponents, timelineTotWidth, 'prev');
				} else if (event.which == '39' && elementInViewport(timeline.get(0))) {
					showNewContent(timelineComponents, timelineTotWidth, 'next');
				}
			});
		});
	}

	function updateSlide(timelineComponents, timelineTotWidth, string) {
		//retrieve translateX value of timelineComponents['eventsWrapper']
		var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
			wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
		//translate the timeline to the left('next')/right('prev') 
		(string == 'next')
			? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
			: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
	}

	function showNewContent(timelineComponents, timelineTotWidth, string) {
		//go from one event to the next/previous one
		var visibleContent = timelineComponents['eventsContent'].find('.selected'),
			newContent = (string == 'next') ? visibleContent.next() : visibleContent.prev();

		if (newContent.length > 0) { //if there's a next/prev event - show it
			var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
				newEvent = (string == 'next') ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

			updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
			updateVisibleContent(newEvent, timelineComponents['eventsContent']);
			newEvent.addClass('selected');
			selectedDate.removeClass('selected');
			updateOlderEvents(newEvent);
			updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
		}
	}

	function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
		//translate timeline to the left/right according to the position of the selected event
		var eventStyle = window.getComputedStyle(event.get(0), null),
			eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
			timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
			timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
		var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

		if ((string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate)) {
			translateTimeline(timelineComponents, - eventLeft + timelineWidth / 1.5, timelineWidth - timelineTotWidth);
		}
	}

	function translateTimeline(timelineComponents, value, totWidth) {
		var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
		value = (value > 0) ? 0 : value; //only negative translate value
		value = (!(typeof totWidth === 'undefined') && value < totWidth) ? totWidth : value; //do not translate more than timeline width
		setTransformValue(eventsWrapper, 'translateX', value + 'px');
		//update navigation arrows visibility
		(value == 0) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
		(value == totWidth) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
	}

	function updateFilling(selectedEvent, filling, totWidth) {
		//change .filling-line length according to the selected event
		var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
			eventLeft = eventStyle.getPropertyValue("left"),
			eventWidth = eventStyle.getPropertyValue("width");
		eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
		var scaleValue = eventLeft / totWidth;
		setTransformValue(filling.get(0), 'scaleX', scaleValue);
	}

	function setDatePosition(timelineComponents, min) {
		for (i = 0; i < timelineComponents['timelineDates'].length; i++) {
			var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
				distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
			timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm * min + 'px');
		}
	}

	function setTimelineWidth(timelineComponents, width) {
		var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]),
			timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'],
			timeSpanNorm = Math.round(timeSpanNorm) + 4,
			totalWidth = timeSpanNorm * width;
		timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
		updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);

		return totalWidth;
	}

	function updateVisibleContent(event, eventsContent) {
		var eventDate = event.data('date'),
			visibleContent = eventsContent.find('.selected'),
			selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
			selectedContentHeight = selectedContent.height();

		if (selectedContent.index() > visibleContent.index()) {
			var classEnetering = 'selected enter-right',
				classLeaving = 'leave-left';
		} else {
			var classEnetering = 'selected enter-left',
				classLeaving = 'leave-right';
		}

		selectedContent.attr('class', classEnetering);
		visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
			visibleContent.removeClass('leave-right leave-left');
			selectedContent.removeClass('enter-left enter-right');
		});
		eventsContent.css('height', selectedContentHeight + 'px');
	}

	function updateOlderEvents(event) {
		event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
	}

	function getTranslateValue(timeline) {
		var timelineStyle = window.getComputedStyle(timeline.get(0), null),
			timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
				timelineStyle.getPropertyValue("-moz-transform") ||
				timelineStyle.getPropertyValue("-ms-transform") ||
				timelineStyle.getPropertyValue("-o-transform") ||
				timelineStyle.getPropertyValue("transform");

		if (timelineTranslate.indexOf('(') >= 0) {
			var timelineTranslate = timelineTranslate.split('(')[1];
			timelineTranslate = timelineTranslate.split(')')[0];
			timelineTranslate = timelineTranslate.split(',');
			var translateValue = timelineTranslate[4];
		} else {
			var translateValue = 0;
		}

		return Number(translateValue);
	}

	function setTransformValue(element, property, value) {
		element.style["-webkit-transform"] = property + "(" + value + ")";
		element.style["-moz-transform"] = property + "(" + value + ")";
		element.style["-ms-transform"] = property + "(" + value + ")";
		element.style["-o-transform"] = property + "(" + value + ")";
		element.style["transform"] = property + "(" + value + ")";
	}

	function parseDate(events) {
		var dateArrays = [];
		events.each(function () {
			var dateComp = $(this).data('date').split('/'),
				newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
			dateArrays.push(newDate);
		});
		return dateArrays;
	}

	function parseDate2(events) {
		var dateArrays = [];
		events.each(function () {
			var singleDate = $(this),
				dateComp = singleDate.data('date').split('T');
			if (dateComp.length > 1) { //both DD/MM/YEAR and time are provided
				var dayComp = dateComp[0].split('/'),
					timeComp = dateComp[1].split(':');
			} else if (dateComp[0].indexOf(':') >= 0) { //only time is provide
				var dayComp = ["2000", "0", "0"],
					timeComp = dateComp[0].split(':');
			} else { //only DD/MM/YEAR
				var dayComp = dateComp[0].split('/'),
					timeComp = ["0", "0"];
			}
			var newDate = new Date(dayComp[2], dayComp[1] - 1, dayComp[0], timeComp[0], timeComp[1]);
			dateArrays.push(newDate);
		});
		return dateArrays;
	}

	function daydiff(first, second) {
		return Math.round((second - first));
	}

	function minLapse(dates) {
		//determine the minimum distance among events
		var dateDistances = [];
		for (i = 1; i < dates.length; i++) {
			var distance = daydiff(dates[i - 1], dates[i]);
			dateDistances.push(distance);
		}
		return Math.min.apply(null, dateDistances);
	}

	function elementInViewport(el) {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while (el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top < (window.pageYOffset + window.innerHeight) &&
			left < (window.pageXOffset + window.innerWidth) &&
			(top + height) > window.pageYOffset &&
			(left + width) > window.pageXOffset
		);
	}

	function checkMQ() {
		//check if mobile or desktop device
		return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	}

	//********************************************************back to top button
	mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () { scrollFunction() };

	function scrollFunction() {
		if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}


	/*FORMSPREE BUTTON*/
	window.formbutton=window.formbutton||function(){
		(formbutton.q=formbutton.q||[]).push(arguments)
	};
		formbutton("create", {
			action: "https://formspree.io/f/xvovgwwk",
			title: "Me contacter:", 
			description: "Laissez moi un message et je vous répondrai dès que possible !",
			theme: "classic",
            buttonImg: "<img src='CSS/Images/envelope-regular.svg' class='upFooter'/>", 
            fields: [
                {
                    type: "email",
                    label: "Email:",
                    name: "email",
                    required: true,
                    placeholder: "votre@email.com"
                },
                {
                    type: "input",
                    label: "Nom & prénom:",
                    name: "name",
                    placeholder: "Nom et prénom",
                },
                {
                    type: "textarea",
                    label: "Message:",
                    name: "message",
                    placeholder: "Vos oeuvres m'intéressent !",
                },
                
                { type: "submit" },
            ],
            styles: {
                description: {
                    background: "#f8db61",
                    fontSize: "1rem",
                    color: "rgb(116, 86, 31)",
                    fontWeight: "normal",
                    textAlign: "center",
                },
                modal: {
                    background: "#f8db61",
                    borderRadius: "0rem",
                  },
                fontFamily: "'Poppins', sans-serif",
                title: {
                    background:"#f8db61",
                    fontWeight: "normal",
                    textAlign: "center",
                    padding: "2rem",
                    margin: "auto",
					borderRadius: "0rem",
					color: "#1a1a1a",
                },
                button: {
                    background: "#f8db61",
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "0rem",
					zIndex: "4",
					boxShadow: "none"
                },
                closeButton: {
                    //display: "none"
                    position: "fixed",
                    top: "1.5rem",
                    right: "1rem"
                  }
            },
            initiallyVisible: false
        });
})