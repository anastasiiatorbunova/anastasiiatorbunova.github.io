jQuery(function(){
	jQuery('.main-header-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});
	
	let pagesCurrent = $('.numeration #current');
	let pagesTotal = $('.numeration #total');
	let slider = $('.main-header-slider');
	slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	   let i = (currentSlide ? currentSlide : 0) + 1;
		pagesCurrent.text("0" + i + '/');
		pagesTotal.text("0" + slick.slideCount);
	});
});

jQuery('.tab-slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	//asNavFor: '.tabcontent-slider',
	focusOnSelect: false,
	responsive: [
		{
			breakpoint:767,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint:480,
			settings: {
				slidesToShow: 2
			}
		}
	]
});

jQuery('.tabcontent-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	asNavFor: '.tab-slider,.tabcontent-slider'
});

jQuery('.tabcontent-slider-main-page').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});


function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent-table");
	
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.setProperty("display", "none", "important");
	}
	
	tablinks = document.getElementsByClassName("tablinks");
	
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.setProperty("display", "flex", "important");
	document.getElementById(cityName).style.flexWrap = "wrap";
	document.getElementById(cityName).style.alignItems = "center";
	evt.currentTarget.className += " active";
}

function toggleMenu(){
	document.getElementById("toggle-menu").style.right = "0";
}
function closeNav() {
  document.getElementById("toggle-menu").style.right = "-250px";
}


jQuery(document).ready(function(){
	var i = 0;
	jQuery('.show-info').on('click', function() {
		if(i == 1){
			jQuery(this).removeClass('open');
			jQuery('.hidden-information').css('visibility','hidden');
			jQuery('.hidden-information').css('height','0px');
			i--;
		}
		else{
			jQuery(this).addClass('open');
			jQuery('.hidden-information').css('visibility','visible');
			jQuery('.hidden-information').css('height','auto');
			i++;
		}
	});

});





