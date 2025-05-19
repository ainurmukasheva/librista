// Функции для работы с темой
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Проверка сохраненной темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateThemeIcon();
    }
    
    // Обработчик переключения темы
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Функция переключения темы
    function toggleTheme() {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
        
        updateThemeIcon();
    }
    
    // Обновление иконки темы
    function updateThemeIcon() {
        if (!themeToggle) return;
        
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
});