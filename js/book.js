// Функции для работы со страницей книги
const booksData = [{
        id: 1,
        title: "1984",
        author: "Джордж Оруэлл",
        cover: "pictures/book11.png",
        year: 1949,
        category: "fiction",
        rating: 4.8,
        description: "Роман-антиутопия Джорджа Оруэлла, изданный в 1949 году. Описывает мир тоталитарного будущего.",
        popularity: 95,
        pages: 328
    },
    {
        id: 2,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        cover: "pictures/book12.png",
        year: 1967,
        category: "fiction",
        rating: 4.9,
        description: "Роман Михаила Булгакова, работа над которым началась в конце 1920-х годов и продолжалась вплоть до смерти писателя.",
        popularity: 92,
        pages: 480
    },
    {
        id: 3,
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        cover: "pictures/book30.png",
        year: 1997,
        category: "fiction",
        rating: 4.7,
        description: "Первый роман в серии книг про юного волшебника Гарри Поттера, написанный Джоан Роулинг.",
        popularity: 98,
        pages: 332
    },
    {
        id: 4,
        title: "Сапиенс. Краткая история человечества",
        author: "Юваль Ной Харари",
        cover: "pictures/book40.png",
        year: 2011,
        category: "science",
        rating: 4.6,
        description: "Книга израильского историка Юваля Ноя Харари, впервые изданная на иврите в 2011 году, а затем на английском в 2014 году.",
        popularity: 88,
        pages: 512
    },
    {
        id: 5,
        title: "Богатый папа, бедный папа",
        author: "Роберт Кийосаки",
        cover: "pictures/book50.png",
        year: 1997,
        category: "business",
        rating: 4.5,
        description: "Книга о финансовой грамотности, написанная американским предпринимателем Робертом Кийосаки в соавторстве с Шэрон Лектер.",
        popularity: 85,
        pages: 336
    },
    {
        id: 6,
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        cover: "pictures/book60.png",
        year: 1943,
        category: "fiction",
        rating: 4.9,
        description: "Аллегорическая повесть, наиболее известное произведение Антуана де Сент-Экзюпери.",
        popularity: 94,
        pages: 96
    },
    {
        id: 7,
        title: "Думай медленно... решай быстро",
        author: "Даниэль Канеман",
        cover: "pictures/book70.png",
        year: 2011,
        category: "science",
        rating: 4.6,
        description: "Книга лауреата Нобелевской премии по экономике Даниэля Канемана, посвящённая исследованию процесса принятия решений.",
        popularity: 82,
        pages: 710
    },
    {
        id: 8,
        title: "Алиса в Стране чудес",
        author: "Льюис Кэрролл",
        cover: "pictures/book80.png",
        year: 1865,
        category: "children",
        rating: 4.7,
        description: "Сказка, написанная английским математиком, поэтом и писателем Чарльзом Лютвиджем Доджсоном под псевдонимом Льюис Кэрролл.",
        popularity: 90,
        pages: 144
    },
    {
        id: 9,
        title: "Преступление и наказание",
        author: "Фёдор Достоевский",
        cover: "pictures/book90.png",
        year: 1866,
        category: "fiction",
        rating: 4.8,
        description: "Социально-психологический и социально-философский роман Фёдора Михайловича Достоевского.",
        popularity: 87,
        pages: 608
    },
    {
        id: 10,
        title: "Война и мир",
        author: "Лев Толстой",
        cover: "pictures/book100.png",
        year: 1869,
        category: "fiction",
        rating: 4.9,
        description: "Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах.",
        popularity: 89,
        pages: 1225
    },
    {
        id: 11,
        title: "Атлант расправил плечи",
        author: "Айн Рэнд",
        cover: "pictures/book100.png",
        year: 1957,
        category: "fiction",
        rating: 4.7,
        description: "Роман американской писательницы и философа Айн Рэнд, впервые опубликованный в 1957 году в США.",
        popularity: 86,
        pages: 1184
    },
    {
        id: 12,
        title: "Гордость и предубеждение",
        author: "Джейн Остин",
        cover: "pictures/book600.png",
        year: 1813,
        category: "fiction",
        rating: 4.8,
        description: "Роман английской писательницы Джейн Остин, опубликованный в 1813 году.",
        popularity: 88,
        pages: 416
    },
    {
        id: 13,
        title: "Семь навыков высокоэффективных людей",
        author: "Стивен Кови",
        cover: "pictures/book110.png",
        year: 1989,
        category: "business",
        rating: 4.6,
        description: "Популярная книга по психологии, написанная Стивеном Кови и впервые изданная в 1989 году.",
        popularity: 84,
        pages: 396
    },
    {
        id: 14,
        title: "Краткая история времени",
        author: "Стивен Хокинг",
        cover: "pictures/book110.png",
        year: 1988,
        category: "science",
        rating: 4.7,
        description: "Научно-популярная книга, написанная английским физиком-теоретиком Стивеном Хокингом.",
        popularity: 83,
        pages: 256
    },
    {
        id: 15,
        title: "Гарри Поттер и Тайная комната",
        author: "Джоан Роулинг",
        cover: "pictures/book110.png",
        year: 1998,
        category: "fiction",
        rating: 4.7,
        description: "Второй роман в серии книг про Гарри Поттера, написанный Джоан Роулинг.",
        popularity: 96,
        pages: 352
    },
    {
        id: 16,
        title: "Властелин колец: Братство кольца",
        author: "Дж. Р. Р. Толкин",
        cover: "pictures/book120.png",
        year: 1954,
        category: "fiction",
        rating: 4.9,
        description: "Первая часть трилогии «Властелин колец» английского писателя Дж. Р. Р. Толкина.",
        popularity: 93,
        pages: 480
    },
    {
        id: 17,
        title: "Хоббит, или Туда и обратно",
        author: "Дж. Р. Р. Толкин",
        cover: "pictures/book110.png",
        year: 1937,
        category: "fiction",
        rating: 4.8,
        description: "Повесть английского писателя Джона Рональда Руэла Толкина.",
        popularity: 91,
        pages: 320
    },
    {
        id: 18,
        title: "Винни-Пух",
        author: "Алан Александр Милн",
        cover: "pictures/book140.png",
        year: 1926,
        category: "children",
        rating: 4.9,
        description: "Повесть английского писателя Алана Александра Милна о плюшевом медвежонке Винни-Пухе и его друзьях.",
        popularity: 92,
        pages: 176
    },
    {
        id: 19,
        title: "Происхождение видов",
        author: "Чарльз Дарвин",
        cover: "pictures/book140.png",
        year: 1859,
        category: "science",
        rating: 4.8,
        description: "Научная работа английского натуралиста и путешественника Чарльза Дарвина.",
        popularity: 80,
        pages: 502
    },
    {
        id: 20,
        title: "Как завоёвывать друзей и оказывать влияние на людей",
        author: "Дейл Карнеги",
        cover: "pictures/book400.png",
        year: 1936,
        category: "business",
        rating: 4.5,
        description: "Книга американского писателя и психолога Дейла Карнеги.",
        popularity: 85,
        pages: 352
    }
];

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

    // Отображение похожих книг
    displaySimilarBooks(book);

    // Обработчики событий для кнопок
    setupEventHandlers(book);
});

// Функция поиска книги по ID
function findBookById(id) {
    return booksData.find(book => book.id === id);
}

// Функция отображения сообщения о том, что книга не найдена
function showBookNotFound() {
    document.querySelector('.book-content').style.display = 'none';
    document.querySelector('.book-not-found').style.display = 'block';
    document.querySelector('.similar-books').style.display = 'none';
    document.title = 'Книга не найдена - Librista';
}

// Функция отображения информации о книге
function displayBookDetails(book) {
    // Обновление заголовка страницы
    document.title = `${book.title} - Librista`;

    // Обновление хлебных крошек
    document.getElementById('book-title-breadcrumb').textContent = book.title;

    // Обновление обложки
    const bookCover = document.getElementById('book-cover');
    bookCover.src = book.cover;
    bookCover.alt = book.title;

    // Обновление основной информации
    document.getElementById('book-title').textContent = book.title;
    document.getElementById('book-author').textContent = book.author;
    document.getElementById('book-rating').textContent = book.rating.toFixed(1);
    document.getElementById('book-year').textContent = `Год издания: ${book.year}`;
    document.getElementById('book-category').textContent = `Категория: ${getCategoryName(book.category)}`;
    document.getElementById('book-pages').textContent = `${book.pages} страниц`;
    document.getElementById('book-description').textContent = book.description;

    // Обновление звезд рейтинга
    document.getElementById('book-stars').innerHTML = generateStars(book.rating);

    // Обновление таблицы с информацией
    document.getElementById('table-title').textContent = book.title;
    document.getElementById('table-author').textContent = book.author;
    document.getElementById('table-year').textContent = book.year;
    document.getElementById('table-category').textContent = getCategoryName(book.category);
    document.getElementById('table-pages').textContent = book.pages;
    document.getElementById('table-rating').textContent = `${book.rating.toFixed(1)} из 5`;
    document.getElementById('table-popularity').textContent = `${book.popularity}%`;
    document.getElementById('table-id').textContent = book.id;

    // Проверка, добавлена ли книга в избранное
    updateFavoriteButton(book.id);
}

// Функция получения названия категории на русском
function getCategoryName(category) {
    const categories = {
        'fiction': 'Художественная литература',
        'science': 'Научная литература',
        'business': 'Бизнес',
        'children': 'Детские книги',
        'biography': 'Биографии',
        'history': 'История'
    };

    return categories[category] || category;
}

// Функция генерации звезд рейтинга
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }

    return stars;
}

// Функция отображения похожих книг
function displaySimilarBooks(book) {
    const similarBooksContainer = document.getElementById('similar-books-container');
    if (!similarBooksContainer) return;

    // Поиск похожих книг (той же категории, но не та же книга)
    const similarBooks = booksData
        .filter(b => b.category === book.category && b.id !== book.id)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    // Очистка контейнера
    similarBooksContainer.innerHTML = '';

    // Добавление похожих книг
    if (similarBooks.length > 0) {
        similarBooks.forEach(similarBook => {
            const bookCard = createBookCard(similarBook);
            similarBooksContainer.appendChild(bookCard);
        });
    } else {
        similarBooksContainer.innerHTML = '<p>Похожие книги не найдены</p>';
    }
}

// Функция создания карточки книги
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" class="book-cover">
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <div class="rating">
                ${generateStars(book.rating)}
                <span>${book.rating.toFixed(1)}</span>
            </div>
        </div>
    `;

    // Добавление обработчика клика для перехода на страницу книги
    bookCard.addEventListener('click', function() {
        window.location.href = `book.html?id=${book.id}`;
    });

    return bookCard;
}

// Функция настройки обработчиков событий
function setupEventHandlers(book) {
    // Кнопка "Читать"
    const readBtn = document.getElementById('read-btn');
    if (readBtn) {
        readBtn.addEventListener('click', function() {
            // Проверка авторизации
            const currentUser = localStorage.getItem('currentUser');
            if (!currentUser) {
                // Если пользователь не авторизован, показываем модального окна входа
                const loginModal = document.getElementById('login-modal');
                if (loginModal) {
                    loginModal.style.display = 'flex';
                }
                return;
            }

            // Здесь будет логика для начала чтения книги
            alert(`Вы начали читать книгу "${book.title}"`);

            // Добавление книги в список читаемых пользователя
            addBookToReading(book.id);
        });
    }

    // Кнопка "В избранное"
    const favoriteBtn = document.getElementById('favorite-btn');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            // Проверка авторизации
            const currentUser = localStorage.getItem('currentUser');
            if (!currentUser) {
                // Если пользователь не авторизован, показываем модальное окно входа
                const loginModal = document.getElementById('login-modal');
                if (loginModal) {
                    loginModal.style.display = 'flex';
                }
                return;
            }

            // Добавление/удаление книги из избранного
            toggleFavorite(book.id);
        });
    }

    // Кнопка "Поделиться"
    const shareBtn = document.getElementById('share-btn');
    const shareModal = document.getElementById('share-modal');
    const shareLink = document.getElementById('share-link');
    const copyLinkBtn = document.getElementById('copy-link-btn');

    if (shareBtn && shareModal) {
        shareBtn.addEventListener('click', function() {
            // Отображение модального окна
            shareModal.style.display = 'flex';

            // Установка ссылки для копирования
            if (shareLink) {
                shareLink.value = window.location.href;
            }
        });
    }

    // Закрытие модального окна "Поделиться"
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (shareModal) {
                shareModal.style.display = 'none';
            }
        });
    });

    // Копирование ссылки
    if (copyLinkBtn && shareLink) {
        copyLinkBtn.addEventListener('click', function() {
            shareLink.select();
            document.execCommand('copy');
            alert('Ссылка скопирована в буфер обмена');
        });
    }

    // Обработчики для кнопок социальных сетей
    setupSocialShareButtons(book);
}

// Функция настройки кнопок социальных сетей
function setupSocialShareButtons(book) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(`Книга "${book.title}" - ${book.author}`);

    // Facebook
    const shareFacebook = document.getElementById('share-facebook');
    if (shareFacebook) {
        shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        shareFacebook.target = '_blank';
    }

    // Twitter
    const shareTwitter = document.getElementById('share-twitter');
    if (shareTwitter) {
        shareTwitter.href = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        shareTwitter.target = '_blank';
    }

    // Telegram
    const shareTelegram = document.getElementById('share-telegram');
    if (shareTelegram) {
        shareTelegram.href = `https://t.me/share/url?url=${url}&text=${title}`;
        shareTelegram.target = '_blank';
    }

    // WhatsApp
    const shareWhatsApp = document.getElementById('share-whatsapp');
    if (shareWhatsApp) {
        shareWhatsApp.href = `https://api.whatsapp.com/send?text=${title} ${url}`;
        shareWhatsApp.target = '_blank';
    }
}

// Функция добавления книги в список читаемых
function addBookToReading(bookId) {
    // Получение текущего пользователя
    const currentUserJson = localStorage.getItem('currentUser');
    if (!currentUserJson) return;

    const currentUser = JSON.parse(currentUserJson);

    // Получение списка пользователей
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Поиск пользователя
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;

    // Добавление книги в список читаемых, если её там еще нет
    if (!users[userIndex].readBooks) {
        users[userIndex].readBooks = [];
    }

    if (!users[userIndex].readBooks.includes(bookId)) {
        users[userIndex].readBooks.push(bookId);

        // Обновление списка пользователей
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Функция добавления/удаления книги из избранного
function toggleFavorite(bookId) {
    // Получение текущего пользователя
    const currentUserJson = localStorage.getItem('currentUser');
    if (!currentUserJson) return;

    const currentUser = JSON.parse(currentUserJson);

    // Получение списка пользователей
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Поиск пользователя
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return;

    // Инициализация массива избранного, если его нет
    if (!users[userIndex].favorites) {
        users[userIndex].favorites = [];
    }

    // Проверка, есть ли книга в избранном
    const favoriteIndex = users[userIndex].favorites.indexOf(bookId);

    if (favoriteIndex === -1) {
        // Добавление книги в избранное
        users[userIndex].favorites.push(bookId);
        alert('Книга добавлена в избранное');
    } else {
        // Удаление книги из избранного
        users[userIndex].favorites.splice(favoriteIndex, 1);
        alert('Книга удалена из избранного');
    }

    // Обновление списка пользователей
    localStorage.setItem('users', JSON.stringify(users));

    // Обновление кнопки избранного
    updateFavoriteButton(bookId);
}

// Функция обновления кнопки избранного
function updateFavoriteButton(bookId) {
    const favoriteBtn = document.getElementById('favorite-btn');
    if (!favoriteBtn) return;

    // Получение текущего пользователя
    const currentUserJson = localStorage.getItem('currentUser');
    if (!currentUserJson) return;

    const currentUser = JSON.parse(currentUserJson);

    // Получение списка пользователей
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Поиск пользователя
    const user = users.find(u => u.id === currentUser.id);
    if (!user) return;

    // Проверка, есть ли книга в избранном
    const isFavorite = user.favorites && user.favorites.includes(bookId);

    if (isFavorite) {
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> В избранном';
        favoriteBtn.classList.add('active');
    } else {
        favoriteBtn.innerHTML = '<i class="far fa-heart"></i> В избранное';
        favoriteBtn.classList.remove('active');
    }
}