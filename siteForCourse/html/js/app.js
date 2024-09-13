const swiper = new Swiper('.swiper', {
	mousewheel: true,
	direction: 'vertical',
	speed: 1700,
	parallax: true
});

// Анимация текста
document.querySelectorAll('.header-content h1').forEach(e => {
	e.innerHTML = e.textContent.replace(/ (-|#|@){1}/g, s => s[1] + s[0]).replace(/(\S*)/g, m => {
		return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>')
	});
	e.querySelectorAll('.letter').forEach(function (l, i) {
		l.setAttribute('style', `z-index: -${i}; transition-duration: ${i / 5 + 1}s`);
	});
});

// Синхронизация активного слайда текста с индексом Swiper
swiper.on('slideChange', function () {
	document.querySelectorAll('.header-content__slide').forEach(function (e, i) {
		return swiper.activeIndex === i ? e.classList.add('active') : e.classList.remove('active');
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelectorAll('.header-content__slide'); // Все слайды
	const mainBtn = document.getElementById('mainBtn'); // Кнопка "Главная"
	const courseBtn = document.getElementById('courseBtn'); // Кнопка "О курсе"
	const aboutBtn = document.getElementById('aboutBtn'); // Кнопка "О нас"
	const logoBtn = document.getElementById('logoBtn'); // Логотип

	// Функция для переключения активного слайда и Swiper
	function activateSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.toggle('active', i === index);
		});
		swiper.slideTo(index); // Переключение слайда Swiper
	}

	// Обработчики событий для каждой кнопки
	mainBtn.addEventListener('click', function (e) {
		e.preventDefault();
		activateSlide(0); // Переключаем на первый слайд (Главная)
	});

	courseBtn.addEventListener('click', function () {
		activateSlide(1); // Переключаем на второй слайд (О курсе)
	});

	aboutBtn.addEventListener('click', function (e) {
		e.preventDefault();
		activateSlide(2); // Переключаем на третий слайд (О нас)
	});

	// Обработчик события для логотипа
	logoBtn.addEventListener('click', function (e) {
		e.preventDefault();
		activateSlide(0); // Переключаем на первый слайд (Главная)
	});
});

// Обработчики для кнопок "Учить прямо сейчас"
document.querySelectorAll('.button--main').forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = '../ready-html/index.html'; // Замените на нужный URL
    });
});

// Обработчик для кнопки "Курс"
document.querySelector('.button--top').addEventListener('click', function() {
    window.location.href = '../ready-html/index.html'; // Замените на нужный URL для кнопки Курс
});