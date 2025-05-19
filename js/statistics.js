// Статистические данные
const statisticsData = {
  totalBooks: 20,
  totalUsers: 1250,
  totalReads: 8750,
  avgRating: 4.7,
  categoriesDistribution: {
    fiction: 12,
    science: 4,
    business: 3,
    children: 2
  },
  topAuthors: [
    { name: "Джоан Роулинг", books: 2, popularity: 97 },
    { name: "Дж. Р. Р. Толкин", books: 2, popularity: 92 },
    { name: "Джордж Оруэлл", books: 1, popularity: 95 },
    { name: "Михаил Булгаков", books: 1, popularity: 92 },
    { name: "Лев Толстой", books: 1, popularity: 89 }
  ],
  monthlyActivity: [
    { month: "Январь", reads: 720 },
    { month: "Февраль", reads: 680 },
    { month: "Март", reads: 750 },
    { month: "Апрель", reads: 800 },
    { month: "Май", reads: 820 },
    { month: "Июнь", reads: 780 },
    { month: "Июль", reads: 760 },
    { month: "Август", reads: 740 },
    { month: "Сентябрь", reads: 790 },
    { month: "Октябрь", reads: 810 },
    { month: "Ноябрь", reads: 830 },
    { month: "Декабрь", reads: 850 }
  ],
  ratingsDistribution: {
    5: 35,
    4: 45,
    3: 15,
    2: 4,
    1: 1
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Отображение общей статистики
  displayGeneralStats();

  // Инициализация графиков
  initCharts();

  // Функция отображения общей статистики
  function displayGeneralStats() {
    document.getElementById('total-books').textContent = statisticsData.totalBooks;
    document.getElementById('total-users').textContent = statisticsData.totalUsers;
    document.getElementById('total-reads').textContent = statisticsData.totalReads;
    document.getElementById('avg-rating').textContent = statisticsData.avgRating.toFixed(1);
  }

  // Функция инициализации графиков
  function initCharts() {
    // График распределения категорий
    initCategoriesChart();

    // График топ авторов
    initAuthorsChart();

    // График активности по месяцам
    initActivityChart();

    // График распределения рейтингов
    initRatingsChart();
  }

  // Функция инициализации графика категорий
  function initCategoriesChart() {
    const ctx = document.getElementById('categories-chart');
    if (!ctx) return;

    const categories = Object.keys(statisticsData.categoriesDistribution);
    const counts = Object.values(statisticsData.categoriesDistribution);

    // Перевод категорий на русский
    const categoryTranslations = {
      fiction: 'Художественная литература',
      science: 'Научная литература',
      business: 'Бизнес',
      children: 'Детские книги'
    };

    const translatedCategories = categories.map(category => categoryTranslations[ category ] || category);

    // Создание графика
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: translatedCategories,
        datasets: [ {
          data: counts,
          backgroundColor: [
            '#4a6fa5',
            '#e67e22',
            '#2ecc71',
            '#9b59b6'
          ],
          borderWidth: 1
        } ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: getComputedStyle(document.body).getPropertyValue('--text-color')
            }
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || '';
                const value = context.raw || 0;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = Math.round((value / total) * 100);
                return `${label}: ${value} (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  }

  // Функция инициализации графика авторов
  function initAuthorsChart() {
    const ctx = document.getElementById('authors-chart');
    if (!ctx) return;

    const authors = statisticsData.topAuthors.map(author => author.name);
    const popularity = statisticsData.topAuthors.map(author => author.popularity);

    // Создание графика
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: authors,
        datasets: [ {
          label: 'Популярность',
          data: popularity,
          backgroundColor: '#4a6fa5',
          borderWidth: 1
        } ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            ticks: {
              color: getComputedStyle(document.body).getPropertyValue('--text-color')
            },
            grid: {
              color: getComputedStyle(document.body).getPropertyValue('--border-color')
            }
          },
          y: {
            ticks: {
              color: getComputedStyle(document.body).getPropertyValue('--text-color')
            },
            grid: {
              color: getComputedStyle(document.body).getPropertyValue('--border-color')
            }
          }
        }
      }
    });
  }

  // Функция инициализации графика активности
  function initActivityChart() {
    const ctx = document.getElementById('activity-chart');
    if (!ctx) return;

    const months = statisticsData.monthlyActivity.map(item => item.month);
    const reads = statisticsData.monthlyActivity.map(item => item.reads);

    // Создание графика
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [ {
          label: 'Количество прочтений',
          data: reads,
          borderColor: '#4a6fa5',
          backgroundColor: 'rgba(74, 111, 165, 0.2)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        } ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            ticks: {
              color: getComputedStyle(document.body).getPropertyValue('--text-color')
            },
            grid: {
              color: getComputedStyle(document.body).getPropertyValue('--border-color')
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: getComputedStyle(document.body).getPropertyValue('--text-color')
            },
            grid: {
              color: getComputedStyle(document.body).getPropertyValue('--border-color')
            }
          }
        }
      }
    });
  }

  // Функция инициализации графика рейтингов
  function initRatingsChart() {
    const ctx = document.getElementById('ratings-chart');
    if (!ctx) return;

    const ratings = Object.keys(statisticsData.ratingsDistribution);
    const counts = Object.values(statisticsData.ratingsDistribution);

    // Создание графика
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ratings.map(rating => `${rating} звезд`),
        datasets: [ {
          data: counts,
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#f39c12',
            '#e67e22',
            '#e74c3c'
          ],
          borderWidth: 1
        } ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: getComputedStyle(document.body).getPropertyValue('--text-color')
            }
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || '';
                const value = context.raw || 0;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = Math.round((value / total) * 100);
                return `${label}: ${value}% книг`;
              }
            }
          }
        }
      }
    });
  }

  // Обработчик изменения темы для обновления графиков
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === 'class') {
        // Перерисовка графиков при изменении темы
        setTimeout(function () {
          initCharts();
        }, 100);
      }
    });
  });

  observer.observe(document.body, { attributes: true });
});