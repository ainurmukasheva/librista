// Данные для библиотеки
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
        cover: "pictures/book10.png",
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
    // Инициализация слайдеров
    initSlider('new-books-slider', booksData.slice(0, 10));
    initSlider('popular-books-slider', booksData.sort((a, b) => b.popularity - a.popularity).slice(0, 10));

    // Функция инициализации слайдера
    function initSlider(sliderId, books) {
        const slider = document.getElementById(sliderId);
        if (!slider) return;

        // Очистка слайдера
        slider.innerHTML = '';

        // Добавление книг в слайдер
        books.forEach(book => {
            const bookCard = createBookCard(book);
            slider.appendChild(bookCard);
        });

        // Обработчики для кнопок слайдера
        const sliderContainer = slider.parentElement;
        const prevButton = sliderContainer.querySelector('.prev');
        const nextButton = sliderContainer.querySelector('.next');

        if (prevButton) {
            prevButton.addEventListener('click', function() {
                slider.scrollBy({ left: -600, behavior: 'smooth' });
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', function() {
                slider.scrollBy({ left: 600, behavior: 'smooth' });
            });
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
});