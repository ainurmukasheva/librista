// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function () {
  // Обработчик для поиска в шапке
  const headerSearch = document.getElementById('header-search');
  const searchBtn = document.getElementById('search-btn');

  if (headerSearch && searchBtn) {
    searchBtn.addEventListener('click', function () {
      const query = headerSearch.value.trim();
      if (query) {
        window.location.href = `catalog.html?query=${encodeURIComponent(query)}`;
      }
    });

    headerSearch.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const query = headerSearch.value.trim();
        if (query) {
          window.location.href = `catalog.html?query=${encodeURIComponent(query)}`;
        }
      }
    });
  }

  // Обработчик для кнопок категорий на главной странице
  const categoryButtons = document.querySelectorAll('.category-card .btn');
  categoryButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const href = button.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });
  });
});

// Функции для работы с мобильным меню
document.addEventListener('DOMContentLoaded', function () {
  // Элементы DOM
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const body = document.body;

  // Создание оверлея для затемнения фона
  const menuOverlay = document.createElement('div');
  menuOverlay.className = 'menu-overlay';
  body.appendChild(menuOverlay);

  // Обработчики событий для открытия/закрытия мобильного меню
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMobileMenu);
  }

  // Синхронизация состояния авторизации между десктопным и мобильным меню
  syncAuthState();

  // Синхронизация темы между десктопным и мобильным меню
  syncThemeState();

  // Обработчики для кнопок авторизации в мобильном меню
  setupMobileAuthButtons();

  // Обработчик для кнопки смены темы в мобильном меню
  setupMobileThemeToggle();

  // Обработчик для поиска в мобильном меню
  setupMobileSearch();

  // Функция открытия мобильного меню
  function openMobileMenu() {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    body.style.overflow = 'hidden'; // Запрет прокрутки страницы
  }

  // Функция закрытия мобильного меню
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    body.style.overflow = ''; // Разрешение прокрутки страницы
  }

  // Функция синхронизации состояния авторизации
  function syncAuthState() {
    const authButtons = document.getElementById('auth-buttons');
    const userProfile = document.getElementById('user-profile');
    const mobileAuthButtons = document.getElementById('mobile-auth-buttons');
    const mobileUserProfile = document.getElementById('mobile-user-profile');
    const username = document.getElementById('username');
    const mobileUsername = document.getElementById('mobile-username');

    // Проверка авторизации
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      // Пользователь авторизован
      const user = JSON.parse(currentUser);

      // Обновление десктопного меню
      if (authButtons) authButtons.style.display = 'none';
      if (userProfile) userProfile.style.display = 'flex';
      if (username) username.textContent = user.name;

      // Обновление мобильного меню
      if (mobileAuthButtons) mobileAuthButtons.style.display = 'none';
      if (mobileUserProfile) mobileUserProfile.style.display = 'block';
      if (mobileUsername) mobileUsername.textContent = user.name;
    } else {
      // Пользователь не авторизован
      // Обновление десктопного меню
      if (authButtons) authButtons.style.display = 'flex';
      if (userProfile) userProfile.style.display = 'none';

      // Обновление мобильного меню
      if (mobileAuthButtons) mobileAuthButtons.style.display = 'block';
      if (mobileUserProfile) mobileUserProfile.style.display = 'none';
    }
  }

  // Функция синхронизации темы
  function syncThemeState() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

    if (themeToggle && mobileThemeToggle) {
      const themeIcon = themeToggle.querySelector('i');
      const mobileThemeIcon = mobileThemeToggle.querySelector('i');

      if (body.classList.contains('dark-theme')) {
        themeIcon.className = 'fas fa-sun';
        mobileThemeIcon.className = 'fas fa-sun';
        mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Светлая тема';
      } else {
        themeIcon.className = 'fas fa-moon';
        mobileThemeIcon.className = 'fas fa-moon';
        mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Темная тема';
      }
    }
  }

  // Функция настройки кнопок авторизации в мобильном меню
  function setupMobileAuthButtons() {
    const mobileLoginBtn = document.getElementById('mobile-login-btn');
    const mobileRegisterBtn = document.getElementById('mobile-register-btn');
    const mobileLogoutBtn = document.getElementById('mobile-logout-btn');

    if (mobileLoginBtn) {
      mobileLoginBtn.addEventListener('click', function () {
        closeMobileMenu();
        const loginModal = document.getElementById('login-modal');
        if (loginModal) {
          loginModal.style.display = 'flex';
        }
      });
    }

    if (mobileRegisterBtn) {
      mobileRegisterBtn.addEventListener('click', function () {
        closeMobileMenu();
        const registerModal = document.getElementById('register-modal');
        if (registerModal) {
          registerModal.style.display = 'flex';
        }
      });
    }

    if (mobileLogoutBtn) {
      mobileLogoutBtn.addEventListener('click', function () {
        localStorage.removeItem('currentUser');
        syncAuthState();
        closeMobileMenu();

        // Перенаправление на главную страницу, если пользователь на странице профиля
        if (window.location.pathname.includes('profile.html')) {
          window.location.href = 'index.html';
        }
      });
    }
  }

  // Функция настройки кнопки смены темы в мобильном меню
  function setupMobileThemeToggle() {
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark-theme')) {
          body.classList.remove('dark-theme');
          body.classList.add('light-theme');
          localStorage.setItem('theme', 'light-theme');
        } else {
          body.classList.remove('light-theme');
          body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark-theme');
        }

        syncThemeState();
      });
    }
  }

  // Функция настройки поиска в мобильном меню
  function setupMobileSearch() {
    const mobileSearch = document.getElementById('mobile-search');
    const mobileSearchBtn = document.getElementById('mobile-search-btn');

    if (mobileSearch && mobileSearchBtn) {
      mobileSearchBtn.addEventListener('click', function () {
        const query = mobileSearch.value.trim();
        if (query) {
          closeMobileMenu();
          window.location.href = `catalog.html?query=${encodeURIComponent(query)}`;
        }
      });

      mobileSearch.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          const query = mobileSearch.value.trim();
          if (query) {
            closeMobileMenu();
            window.location.href = `catalog.html?query=${encodeURIComponent(query)}`;
          }
        }
      });
    }
  }

  // Обработка изменения размера окна
  window.addEventListener('resize', function () {
    if (window.innerWidth > 997) {
      // Закрытие мобильного меню при увеличении размера окна
      closeMobileMenu();
    }
  });
});