// Добавим функцию для инициализации слайдера
function initImageSlider() {
    const sliderTrack = document.getElementById('book-images-slider');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    
    if (!sliderTrack || !dots.length || !prevButton || !nextButton) return;
    
    let currentSlide = 0;
    const slideCount = document.querySelectorAll('.slider-slide').length;
    
    // Функция для перехода к определенному слайду
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }
        
        currentSlide = index;
        
        // Обновление положения слайдера
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Обновление активной точки
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    // Обработчики событий для кнопок
    prevButton.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    nextButton.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    // Обработчики событий для точек
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Автоматическое переключение слайдов
    let slideInterval;
    
    function startSlideInterval() {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000); // Переключение каждые 5 секунд
    }
    
    function stopSlideInterval() {
        clearInterval(slideInterval);
    }
    
    // Запуск автоматического переключения
    startSlideInterval();
    
    // Остановка автоматического переключения при наведении
    sliderTrack.parentElement.addEventListener('mouseenter', stopSlideInterval);
    sliderTrack.parentElement.addEventListener('mouseleave', startSlideInterval);
    
    // Обработка свайпов для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Минимальное расстояние для свайпа
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Свайп влево - следующий слайд
            goToSlide(currentSlide + 1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Свайп вправо - предыдущий слайд
            goToSlide(currentSlide - 1);
        }
    }
}

// Вызываем функцию инициализации слайдера после загрузки информации о книге
document.addEventListener('DOMContentLoaded', function() {
    // Получение ID книги из URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));
    
    // Проверка наличия ID
    if (!bookId) {
        showBookNotFound();
        return;
    }
    
    // Поиск книги по ID
    const book = findBookById(bookId);
    
    // Проверка наличия книги
    if (!book) {
        showBookNotFound();
        return;
    }
    
    // Отображение информации о книге
    displayBookDetails(book);
    
    // Инициализация слайдера изображений
    initImageSlider();
    
    // Отображение похожих книг
    displaySimilarBooks(book);
    
    // Обработчики событий для кнопок
    setupEventHandlers(book);
});