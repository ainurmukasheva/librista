// Функции для работы с авторизацией
document.addEventListener('DOMContentLoaded', function () {
  // Элементы DOM
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const authButtons = document.getElementById('auth-buttons');
  const userProfile = document.getElementById('user-profile');
  const usernameElement = document.getElementById('username');

  const loginModal = document.getElementById('login-modal');
  const registerModal = document.getElementById('register-modal');
  const closeButtons = document.querySelectorAll('.close');

  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  const showRegisterLink = document.getElementById('show-register');
  const showLoginLink = document.getElementById('show-login');

  // Проверка авторизации при загрузке страницы
  checkAuth();

  // Обработчики событий для кнопок
  if (loginBtn) loginBtn.addEventListener('click', showLoginModal);
  if (registerBtn) registerBtn.addEventListener('click', showRegisterModal);
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  // Закрытие модальных окон
  closeButtons.forEach(button => {
    button.addEventListener('click', closeModals);
  });

  // Переключение между формами
  if (showRegisterLink) showRegisterLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
  });

  if (showLoginLink) showLoginLink.addEventListener('click', function (e) {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'flex';
  });

  // Закрытие модальных окон при клике вне их области
  window.addEventListener('click', function (e) {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
      registerModal.style.display = 'none';
    }
  });

  // Обработка отправки форм
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      login();
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      register();
    });
  }

  // Функция проверки авторизации
  function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      if (authButtons) authButtons.style.display = 'none';
      if (userProfile) {
        userProfile.style.display = 'flex';
        if (usernameElement) usernameElement.textContent = user.name;
      }
    } else {
      if (authButtons) authButtons.style.display = 'flex';
      if (userProfile) userProfile.style.display = 'none';
    }
  }

  // Функция входа
  function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Получение списка пользователей
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Поиск пользователя
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Сохранение информации о текущем пользователе
      localStorage.setItem('currentUser', JSON.stringify(user));

      // Обновление интерфейса
      closeModals();
      checkAuth();

      // Уведомление об успешном входе
      alert('Вы успешно вошли в систему!');
    } else {
      alert('Неверный email или пароль');
    }
  }

  // Функция регистрации
  function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Проверка паролей
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    // Получение списка пользователей
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Проверка на существование пользователя
    if (users.some(u => u.email === email)) {
      alert('Пользователь с таким email уже существует');
      return;
    }

    // Создание нового пользователя
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      favorites: [],
      readBooks: [],
      ratings: {}
    };

    // Добавление пользователя в список
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Автоматический вход
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    // Обновление интерфейса
    closeModals();
    checkAuth();

    // Уведомление об успешной регистрации
    alert('Вы успешно зарегистрировались!');
  }

  // Функция выхода
  function logout() {
    localStorage.removeItem('currentUser');
    checkAuth();

    // Перенаправление на главную страницу, если пользователь на странице профиля
    if (window.location.pathname.includes('404.html')) {
      window.location.href = 'index.html';
    }
  }

  // Функция отображения модального окна входа
  function showLoginModal() {
    loginModal.style.display = 'flex';
  }

  // Функция отображения модального окна регистрации
  function showRegisterModal() {
    registerModal.style.display = 'flex';
  }

  // Функция закрытия всех модальных окон
  function closeModals() {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
  }
});