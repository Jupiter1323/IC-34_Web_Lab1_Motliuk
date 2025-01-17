<<<<<<< HEAD
let currentLab = 1;
let currentSection = null;

// Змінні для зображень
const imageCaseHTML = `
<div class="image-case">
    <img src="images/image3.png" alt="Фото студента">
</div>
`;

const imageCaseHTML1 = `
<div class="image-case">
    <img src="images/image4.png" alt="Фото студента">
</div>
`;

const imageCaseHTML2 = `
<div class="image-case">
    <img src="images/image5.png" alt="Фото студента">
</div>
`;

// Функція для відображення вмісту лабораторної роботи
function displayLabContent(labNumber) {
    const content = document.getElementById('mainContent');
    content.innerHTML = `Посилання на сайт. <a href="index.html" class="home-link">(сайт)</a>`;
=======
let currentLab = 1; 
let currentSection = null; 

// Функція для відображення вмісту лабораторних робіт
function displayLabContent(labNumber) {
    const content = document.getElementById('mainContent');
    content.innerHTML = `Вміст для лабораторної роботи №${labNumber}. <a href="index.html" class="home-link">(сайт)</a>`;  // Додаємо HTML
>>>>>>> 72a859ae5147d2e7d415d486bcde21eee3c61e69
}

// Функція для вибору лабораторної роботи
function selectLab(labNumber) {
    currentLab = labNumber;

    document.querySelectorAll('.menu button').forEach(button => {
        button.classList.remove('active');
        button.style.fontSize = '14px';
    });

    const activeButton = document.getElementById(`lab${labNumber}`);
    activeButton.classList.add('active');
    activeButton.style.fontSize = '18px';

    displayLabContent(labNumber);
<<<<<<< HEAD
=======

>>>>>>> 72a859ae5147d2e7d415d486bcde21eee3c61e69
    showContent(0, 'Сайт');
}

// Функція для відображення вмісту кожного розділу
function showContent(sectionNumber, sectionTitle) {
    currentSection = sectionNumber;

    document.querySelectorAll('.sidebar button').forEach(button => {
        button.classList.remove('active');
        button.style.fontSize = button.classList.contains('small') ? '12px' : '16px';
    });

    const activeButton = document.getElementById(`section${sectionNumber}`);
    activeButton.classList.add('active');
    activeButton.style.fontSize = '18px';

    const content = document.getElementById('mainContent');
<<<<<<< HEAD

    // Вміст для конкретних розділів лабораторної роботи 1
    if (currentLab === 1) {
        if (sectionNumber === 1) {
            content.innerHTML = `
                <h3>Опис структури</h3>
                Опис структури веб-застосунку для купівлі комп'ютерних ігор:

1. Банер: Верхня частина сторінки містить банер з фоновим зображенням і назвою "GameHub", що створює враження та привертає увагу до сайту.
2. Основний контент: Цей розділ включає:
   - Таблиця ігор з назвами, описами та цінами.
   - Списки: нумерований список особливостей кожної гри та маркований список загальних функцій.
3. Форма: Форма для збору відгуків дозволяє користувачам залишати коментарі про ігри.
4. Посилання на опис предметного середовища: Користувачі можуть перейти на сторінку з детальним описом предметної галузі.
5. Навігація: Меню дозволяє легко переходити між сторінками, включаючи сторінки з описом предметного середовища та звітами.
6. Футер: Футер містить інформацію про авторські права, завершуючи структуру сайту.


Веб-застосунок для купівлі комп'ютерних ігор дозволяє користувачам переглядати різні ігри, ознайомлюватися з їх описом, ціною та технічними вимогами. 
Користувачі можуть додавати обрані ігри до кошика та здійснювати покупку через інтегровану платіжну систему. 
Після завершення оплати користувач отримує доступ до цифрового ключа або можливість завантажити гру.
Користувач із правами адміністратора може редагувати наявні ігри в каталозі, змінювати їхні характеристики, додавати нові ігри та видаляти застарілі або непотрібні позиції.
<!-- Посилання на сайт -->
<p>Для перегляду опис предметного середовища перейдіть за посиланням: <a href="subject.html" target="_blank">Опис предметного середовища</a>.</p>
            `;
            
        } else if (sectionNumber === 2) {
            content.innerHTML = `
                <h3>Тема Мета Місце</h3>
                 <p>Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.</p>
                 <p>Мета: придбати практичні навички роботи  з HTML-документом, таблицями,  зображеннями, посиланнями, списками, формами.Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
в коді.</p>
                 <p>Місце: веб-застосунок для купівлі комп'ютерних ігор доступний на платформі GitHub Pages за адресою https://jupiter1323.github.io/IC-34_Web_Lab1_Motliuk/, або на локальному сервері для тестування.</p>

            `;
        } else if (sectionNumber === 3) {
            content.innerHTML = `
                <h3>СТРУКТУРА ДОКУМЕНТА</h3>
                <p>Опис структури документа HTML:
                1. Тип документа : Вказує на тип документа та версію HTML (HTML5).
                2. Тег <code>&lt;html&gt;</code>: Визначає початок документа та вказує на мову документа — українську.
                3. Тег <code>&lt;head&gt;</code>: 
                - Включає мета-теги для встановлення кодування сторінки та для адаптації сторінки під різні пристрої.
                - Назва сторінки задається через тег <code>&lt;title&gt;</code>.
                - Підключення зовнішнього стилю через тег <code>&lt;link&gt;</code>.
                4. Тег <code>&lt;body&gt;</code>: Основний вміст сторінки.
                - Контейнер: Обгортка для всього вмісту.  
                5. Хедер: 
                - Заголовок сторінки з назвою звітів, описом дисципліни та іменем студента.
                - Фото студента розташоване поряд із текстом.
                6. Меню навігації: 
                - Кнопки для вибору лабораторних робіт, що при натисканні відображають відповідний вміст.
                7. Розділ контенту:
                - Бічна панель: Кнопки для переходу до різних частин звіту (наприклад, "Опис структури", "Тема Мета Місце" тощо).
                - Основний контент: Містить вміст, що відповідає вибраному розділу.
                - Контейнер для скріншотів: Може бути прихований або показаний в залежності від вибору.
                8. Підключення скрипта: Для роботи інтерактивних елементів підключається зовнішній скрипт.</p>
            `;
        } else if (sectionNumber === 4) {
            content.innerHTML = `
                <h3>HTML-код ТАБЛИЦІ:</h3>
                <pre class="code-block">
&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;№&lt;/th&gt;
        &lt;th&gt;Назва гри&lt;/th&gt;
        &lt;th&gt;Опис гри&lt;/th&gt;
        &lt;th&gt;Ціна&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;S.T.A.L.K.E.R.: Shadow of Chernobyl&lt;/td&gt;
        &lt;td&gt;Перша гра серії, що занурює в атмосферу Зони відчуження після Чорнобильської катастрофи.&lt;/td&gt;
        &lt;td&gt;250 грн&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;S.T.A.L.K.E.R.: Clear Sky&lt;/td&gt;
        &lt;td&gt;Пріквел до "Shadow of Chernobyl", в якому розповідається про події перед основною грою.&lt;/td&gt;
        &lt;td&gt;300 грн&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;S.T.A.L.K.E.R.: Call of Pripyat&lt;/td&gt;
        &lt;td&gt;Третя частина серії, де гравець грає за агента СБУ, що відправлений в зону для розслідування та пошуку причин аномалій у районі Прип'яті.&lt;/td&gt;
        &lt;td&gt;350 грн&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;4&lt;/td&gt;
        &lt;td&gt;S.T.A.L.K.E.R. 2: Heart of Chernobyl&lt;/td&gt;
        &lt;td&gt;Оголошена нова частина серії, яка переносить гравців у нову Зону, з новими аномаліями, мутантами та можливістю впливати на розвиток подій.&lt;/td&gt;
        &lt;td&gt;700 грн&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt
                </pre>
                ${imageCaseHTML}
            `;
        } else if (sectionNumber === 5) {
            content.innerHTML = `
                <h3>HTML-код ФОРМИ:</h3>
                <pre class="code-block">
&lt;form action="#"&gt;
    &lt;label for="feedback"&gt;Ваш відгук:&lt;/label&gt;
    &lt;textarea id="feedback" name="feedback" rows="4" placeholder="Напишіть ваш відгук..."&gt;&lt;/textarea&gt;
    &lt;button type="submit"&gt;Відправити відгук&lt;/button&gt;
&lt;/form&gt;
                </pre>
                ${imageCaseHTML1}
            `;
        } else if (sectionNumber === 6) {
            content.innerHTML = `
                <h3>HTML-код ЗОБРАЖЕННЯ:</h3>
                <pre class="code-block">
&lt;div class="banner"&gt;
    &lt;h1&gt;GameHub&lt;/h1&gt;
&lt;/div&gt;

&lt;!-- Зображення в стилях --&gt;
.photo-student img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}
                </pre>
                ${imageCaseHTML2}
            `;
        } else if (sectionNumber === 7) {
            content.innerHTML = `
                <h3>Висновок:</h3>
<p>Під час роботи було створено HTML-документ зі структурою, що включає таблиці, списки, зображення, посилання та форми. 
Реалізовано шаблон для звітів лабораторних робіт із підтримкою навігації між розділами. 
Отримані практичні навички роботи з HTML-елементами для створення базового веб-документа.</p>
            `;
        } else {
            content.innerHTML = `Посилання на сайт. ${sectionTitle}`;
        }
    } else {
        content.innerHTML = `Вміст для лабораторної роботи №${currentLab}. ${sectionTitle}`;
=======
    if (sectionNumber === 4) {
        // Просто відображаємо текст без зображення для section4
        content.innerHTML = `Вміст для лабораторної роботи №${currentLab}.${sectionNumber} (${sectionTitle})`;
    } else {
        content.innerHTML = `Вміст для лабораторної роботи №${currentLab}.${sectionNumber} (${sectionTitle})`;
>>>>>>> 72a859ae5147d2e7d415d486bcde21eee3c61e69
    }
}

// Вибір початкової лабораторної роботи
selectLab(1);
