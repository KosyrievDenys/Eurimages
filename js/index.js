document.querySelector('.menu span').onclick = () => {
	document.querySelector('.menu').classList.toggle('active');
}

function slider() {
	const sliderContent = document.querySelector('.slider .slider__item-content');
	const sliderItem = document.querySelectorAll('.slider .slider__item');
	const slickPrev = document.querySelector('.slider .slick-prev');
	const slickNext = document.querySelector('.slider .slick-next');
	let sliderWidth = document.querySelector('.slider').offsetWidth;;
	let count = 0;

	function init() {
		sliderContent.style.width = `${sliderWidth*sliderItem.length}px`;
	sliderItem.forEach(item => {
		item.style.width = `${sliderWidth}px`
		item.style.height = 'auto';
	})
	}

	window.addEventListener('resize', init);
	init();

	slickNext.onclick = () => {
		count++;
		if (count === sliderItem.length) count = 0;
		sliderContent.style.transform = 'translate(-'+count*sliderWidth+'px)';
	}
	slickPrev.onclick = () => {
		count--;
		if (count < 0) count = sliderItem.length-1;
		sliderContent.style.transform = 'translate(-'+count*sliderWidth+'px)';
	}
}

slider();

