const booksData = [
  {
    id: 1,
    title: "1984",
    author: "Джордж Оруэлл",
    cover: "pictures/book11.png",
    year: 1949,
    category: "fiction",
    rating: 4.8,
    description:
      "Роман-антиутопия Джорджа Оруэлла, изданный в 1949 году. Описывает мир тоталитарного будущего.",
    popularity: 95,
    pages: 328,
  },
  {
    id: 2,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    cover: "pictures/book12.png",
    year: 1967,
    category: "fiction",
    rating: 4.9,
    description:
      "Роман Михаила Булгакова, работа над которым началась в конце 1920-х годов и продолжалась вплоть до смерти писателя.",
    popularity: 92,
    pages: 480,
  },
  {
    id: 3,
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    cover: "pictures/book30.png",
    year: 1997,
    category: "fiction",
    rating: 4.7,
    description:
      "Первый роман в серии книг про юного волшебника Гарри Поттера, написанный Джоан Роулинг.",
    popularity: 98,
    pages: 332,
  },
  {
    id: 4,
    title: "Сапиенс. Краткая история человечества",
    author: "Юваль Ной Харари",
    cover: "pictures/book40.png",
    year: 2011,
    category: "science",
    rating: 4.6,
    description:
      "Книга израильского историка Юваля Ноя Харари, впервые изданная на иврите в 2011 году, а затем на английском в 2014 году.",
    popularity: 88,
    pages: 512,
  },
  {
    id: 5,
    title: "Богатый папа, бедный папа",
    author: "Роберт Кийосаки",
    cover: "pictures/book50.png",
    year: 1997,
    category: "business",
    rating: 4.5,
    description:
      "Книга о финансовой грамотности, написанная американским предпринимателем Робертом Кийосаки в соавторстве с Шэрон Лектер.",
    popularity: 85,
    pages: 336,
  },
  {
    id: 6,
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    cover: "pictures/book60.png",
    year: 1943,
    category: "fiction",
    rating: 4.9,
    description:
      "Аллегорическая повесть, наиболее известное произведение Антуана де Сент-Экзюпери.",
    popularity: 94,
    pages: 96,
  },
  {
    id: 7,
    title: "Думай медленно... решай быстро",
    author: "Даниэль Канеман",
    cover: "pictures/book70.png",
    year: 2011,
    category: "science",
    rating: 4.6,
    description:
      "Книга лауреата Нобелевской премии по экономике Даниэля Канемана, посвящённая исследованию процесса принятия решений.",
    popularity: 82,
    pages: 710,
  },
  {
    id: 8,
    title: "Алиса в Стране чудес",
    author: "Льюис Кэрролл",
    cover: "pictures/book80.png",
    year: 1865,
    category: "children",
    rating: 4.7,
    description:
      "Сказка, написанная английским математиком, поэтом и писателем Чарльзом Лютвиджем Доджсоном под псевдонимом Льюис Кэрролл.",
    popularity: 90,
    pages: 144,
  },
  {
    id: 9,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    cover: "pictures/book90.png",
    year: 1866,
    category: "fiction",
    rating: 4.8,
    description:
      "Социально-психологический и социально-философский роман Фёдора Михайловича Достоевского.",
    popularity: 87,
    pages: 608,
  },
  {
    id: 10,
    title: "Война и мир",
    author: "Лев Толстой",
    cover: "pictures/book100.png",
    year: 1869,
    category: "fiction",
    rating: 4.9,
    description:
      "Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах.",
    popularity: 89,
    pages: 1225,
  },
  {
    id: 11,
    title: "Атлант расправил плечи",
    author: "Айн Рэнд",
    cover: "pictures/book100.png",
    year: 1957,
    category: "fiction",
    rating: 4.7,
    description:
      "Роман американской писательницы и философа Айн Рэнд, впервые опубликованный в 1957 году в США.",
    popularity: 86,
    pages: 1184,
  },
  {
    id: 12,
    title: "Гордость и предубеждение",
    author: "Джейн Остин",
    cover: "pictures/book600.png",
    year: 1813,
    category: "fiction",
    rating: 4.8,
    description:
      "Роман английской писательницы Джейн Остин, опубликованный в 1813 году.",
    popularity: 88,
    pages: 416,
  },
  {
    id: 13,
    title: "Семь навыков высокоэффективных людей",
    author: "Стивен Кови",
    cover: "pictures/book110.png",
    year: 1989,
    category: "business",
    rating: 4.6,
    description:
      "Популярная книга по психологии, написанная Стивеном Кови и впервые изданная в 1989 году.",
    popularity: 84,
    pages: 396,
  },
  {
    id: 14,
    title: "Краткая история времени",
    author: "Стивен Хокинг",
    cover: "pictures/book110.png",
    year: 1988,
    category: "science",
    rating: 4.7,
    description:
      "Научно-популярная книга, написанная английским физиком-теоретиком Стивеном Хокингом.",
    popularity: 83,
    pages: 256,
  },
  {
    id: 15,
    title: "Гарри Поттер и Тайная комната",
    author: "Джоан Роулинг",
    cover: "pictures/book110.png",
    year: 1998,
    category: "fiction",
    rating: 4.7,
    description:
      "Второй роман в серии книг про Гарри Поттера, написанный Джоан Роулинг.",
    popularity: 96,
    pages: 352,
  },
  {
    id: 16,
    title: "Властелин колец: Братство кольца",
    author: "Дж. Р. Р. Толкин",
    cover: "pictures/book120.png",
    year: 1954,
    category: "fiction",
    rating: 4.9,
    description:
      "Первая часть трилогии «Властелин колец» английского писателя Дж. Р. Р. Толкина.",
    popularity: 93,
    pages: 480,
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
    pages: 320,
  },
  {
    id: 18,
    title: "Винни-Пух",
    author: "Алан Александр Милн",
    cover: "pictures/book140.png",
    year: 1926,
    category: "children",
    rating: 4.9,
    description:
      "Повесть английского писателя Алана Александра Милна о плюшевом медвежонке Винни-Пухе и его друзьях.",
    popularity: 92,
    pages: 176,
  },
  {
    id: 19,
    title: "Происхождение видов",
    author: "Чарльз Дарвин",
    cover: "pictures/book140.png",
    year: 1859,
    category: "science",
    rating: 4.8,
    description:
      "Научная работа английского натуралиста и путешественника Чарльза Дарвина.",
    popularity: 80,
    pages: 502,
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
    pages: 352,
  },
];

// Функции для работы с каталогом
document.addEventListener("DOMContentLoaded", function () {
  // Элементы DOM
  const booksContainer = document.getElementById("books-container");
  const paginationContainer = document.getElementById("pagination");
  const catalogSearch = document.getElementById("catalog-search");
  const catalogSearchBtn = document.getElementById("catalog-search-btn");
  const gridViewBtn = document.getElementById("grid-view");
  const listViewBtn = document.getElementById("list-view");
  const sortBySelect = document.getElementById("sort-by");
  const applyFiltersBtn = document.getElementById("apply-filters");
  const resetFiltersBtn = document.getElementById("reset-filters");
  const authorsFilter = document.getElementById("authors-filter");

  // Параметры каталога
  let currentPage = 1;
  const booksPerPage = 12;
  let filteredBooks = [];
  let viewMode = "grid";

  // Инициализация каталога
  initCatalog();

  // Функция инициализации каталога
  function initCatalog() {
    // Инициализация фильтрованных книг всеми книгами из data.js
    filteredBooks = [...booksData];

    // Заполнение фильтра авторов
    populateAuthorsFilter();

    // Применение параметров из URL
    applyUrlParams();

    // Отображение книг
    displayBooks();

    // Обработчики событий
    if (catalogSearchBtn) {
      catalogSearchBtn.addEventListener("click", function () {
        searchBooks();
      });
    }

    if (catalogSearch) {
      catalogSearch.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          searchBooks();
        }
      });
    }

    if (gridViewBtn) {
      gridViewBtn.addEventListener("click", function () {
        setViewMode("grid");
      });
    }

    if (listViewBtn) {
      listViewBtn.addEventListener("click", function () {
        setViewMode("list");
      });
    }

    if (sortBySelect) {
      sortBySelect.addEventListener("change", function () {
        sortBooks();
        displayBooks();
      });
    }

    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener("click", function () {
        applyFilters();
        displayBooks();
      });
    }

    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", function () {
        resetFilters();
        displayBooks();
      });
    }
  }

  // Функция заполнения фильтра авторов
  function populateAuthorsFilter() {
    if (!authorsFilter) return;

    // Получение уникальных авторов
    const authors = [...new Set(booksData.map((book) => book.author))];

    // Сортировка авторов по алфавиту
    authors.sort();

    // Очистка фильтра
    authorsFilter.innerHTML = "";

    // Добавление авторов в фильтр
    authors.forEach((author) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" name="author" value="${author}"> ${author}`;
      authorsFilter.appendChild(label);
    });
  }

  // Функция применения параметров из URL
  function applyUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);

    // Применение категории
    const category = urlParams.get("category");
    if (category) {
      const categoryCheckboxes = document.querySelectorAll(
        'input[name="category"]'
      );
      categoryCheckboxes.forEach((checkbox) => {
        if (checkbox.value === category) {
          checkbox.checked = true;
        }
      });

      filteredBooks = booksData.filter((book) => book.category === category);
    }

    // Применение поискового запроса
    const query = urlParams.get("query");
    if (query && catalogSearch) {
      catalogSearch.value = query;
      filteredBooks = searchBooksByQuery(query);
    }
  }

  // Функция отображения книг
  function displayBooks() {
    if (!booksContainer) return;

    // Сортировка книг
    sortBooks();

    // Расчет пагинации
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const currentBooks = filteredBooks.slice(startIndex, endIndex);

    // Очистка контейнера
    booksContainer.innerHTML = "";

    // Установка класса для контейнера в зависимости от режима отображения
    booksContainer.className =
      viewMode === "grid" ? "books-grid" : "books-list";

    // Добавление книг
    if (currentBooks.length > 0) {
      currentBooks.forEach((book) => {
        const bookCard = createBookCard(book);
        booksContainer.appendChild(bookCard);
      });
    } else {
      booksContainer.innerHTML = '<div class="no-books">Книги не найдены</div>';
    }

    // Обновление пагинации
    updatePagination(totalPages);
  }

  // Функция создания карточки книги
  function createBookCard(book) {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
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
    bookCard.addEventListener("click", function () {
      window.location.href = `book.html?id=${book.id}`;
    });

    return bookCard;
  }

  // Функция генерации звезд рейтинга
  function generateStars(rating) {
    let stars = "";
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

  // Функция обновления пагинации
  function updatePagination(totalPages) {
    if (!paginationContainer) return;

    // Очистка контейнера
    paginationContainer.innerHTML = "";

    // Если страниц меньше 2, не отображаем пагинацию
    if (totalPages < 2) return;

    // Кнопка "Предыдущая"
    if (currentPage > 1) {
      const prevButton = document.createElement("button");
      prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
      prevButton.addEventListener("click", function () {
        currentPage--;
        displayBooks();
        window.scrollTo(0, 0);
      });
      paginationContainer.appendChild(prevButton);
    }

    // Номера страниц
    for (let i = 1; i <= totalPages; i++) {
      // Ограничение количества отображаемых страниц
      if (totalPages > 7) {
        if (
          i !== 1 &&
          i !== totalPages &&
          (i < currentPage - 1 || i > currentPage + 1)
        ) {
          if (i === 2 || i === totalPages - 1) {
            const ellipsis = document.createElement("span");
            ellipsis.textContent = "...";
            ellipsis.className = "pagination-ellipsis";
            paginationContainer.appendChild(ellipsis);
          }
          continue;
        }
      }

      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.className = "active";
      }

      pageButton.addEventListener("click", function () {
        currentPage = i;
        displayBooks();
        window.scrollTo(0, 0);
      });

      paginationContainer.appendChild(pageButton);
    }

    // Кнопка "Следующая"
    if (currentPage < totalPages) {
      const nextButton = document.createElement("button");
      nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
      nextButton.addEventListener("click", function () {
        currentPage++;
        displayBooks();
        window.scrollTo(0, 0);
      });
      paginationContainer.appendChild(nextButton);
    }
  }

  // Функция поиска книг
  function searchBooks() {
    if (!catalogSearch) return;

    const query = catalogSearch.value.trim();
    if (query === "") {
      filteredBooks = [...booksData];
    } else {
      filteredBooks = searchBooksByQuery(query);
    }

    currentPage = 1;
    displayBooks();

    // Обновление URL
    const url = new URL(window.location);
    if (query) {
      url.searchParams.set("query", query);
    } else {
      url.searchParams.delete("query");
    }
    window.history.pushState({}, "", url);
  }

  // Функция поиска книг по запросу
  function searchBooksByQuery(query) {
    query = query.toLowerCase();
    return booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
    );
  }

  // Функция установки режима отображения
  function setViewMode(mode) {
    viewMode = mode;

    if (gridViewBtn) {
      gridViewBtn.className = mode === "grid" ? "active" : "";
    }

    if (listViewBtn) {
      listViewBtn.className = mode === "list" ? "active" : "";
    }

    displayBooks();
  }

  // Функция сортировки книг
  function sortBooks() {
    if (!sortBySelect) return;

    const sortBy = sortBySelect.value;

    switch (sortBy) {
      case "popularity":
        filteredBooks.sort((a, b) => b.popularity - a.popularity);
        break;
      case "rating":
        filteredBooks.sort((a, b) => b.rating - a.rating);
        break;
      case "title":
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "year":
        filteredBooks.sort((a, b) => b.year - a.year);
        break;
    }
  }

  // Функция применения фильтров
  function applyFilters() {
    // Сброс фильтрованных книг
    filteredBooks = [...booksData];

    // Фильтрация по категориям
    const selectedCategories = getSelectedValues("category");
    if (selectedCategories.length > 0) {
      filteredBooks = filteredBooks.filter((book) =>
        selectedCategories.includes(book.category)
      );
    }

    // Фильтрация по авторам
    const selectedAuthors = getSelectedValues("author");
    if (selectedAuthors.length > 0) {
      filteredBooks = filteredBooks.filter((book) =>
        selectedAuthors.includes(book.author)
      );
    }

    // Фильтрация по году издания
    const yearFromInput = document.getElementById("year-from");
    const yearToInput = document.getElementById("year-to");

    const yearFrom = yearFromInput && yearFromInput.value;
    const yearTo = yearToInput && yearToInput.value;

    if (yearFrom) {
      filteredBooks = filteredBooks.filter(
        (book) => book.year >= parseInt(yearFrom)
      );
    }

    if (yearTo) {
      filteredBooks = filteredBooks.filter(
        (book) => book.year <= parseInt(yearTo)
      );
    }

    // Фильтрация по рейтингу
    const ratingInput = document.querySelector('input[name="rating"]:checked');
    const selectedRating = ratingInput && ratingInput.value;

    if (selectedRating && selectedRating !== "0") {
      filteredBooks = filteredBooks.filter(
        (book) => book.rating >= parseInt(selectedRating)
      );
    }

    // Сброс текущей страницы
    currentPage = 1;
  }

  // Функция получения выбранных значений из чекбоксов
  function getSelectedValues(name) {
    const checkboxes = document.querySelectorAll(
      `input[name="${name}"]:checked`
    );
    return Array.from(checkboxes).map((checkbox) => checkbox.value);
  }

  // Функция сброса фильтров
  function resetFilters() {
    // Сброс чекбоксов категорий
    document.querySelectorAll('input[name="category"]').forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Сброс чекбоксов авторов
    document.querySelectorAll('input[name="author"]').forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Сброс полей года издания
    if (document.getElementById("year-from")) {
      document.getElementById("year-from").value = "";
    }

    if (document.getElementById("year-to")) {
      document.getElementById("year-to").value = "";
    }

    // Сброс рейтинга
    const defaultRating = document.querySelector(
      'input[name="rating"][value="0"]'
    );
    if (defaultRating) {
      defaultRating.checked = true;
    }

    // Сброс поискового запроса
    if (catalogSearch) {
      catalogSearch.value = "";
    }

    // Сброс фильтрованных книг
    filteredBooks = [...booksData];

    // Сброс текущей страницы
    currentPage = 1;
  }
});
