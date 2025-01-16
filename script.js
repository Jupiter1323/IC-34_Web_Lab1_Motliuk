let currentLab = 1; 
let currentSection = null; 

// Функція для відображення вмісту лабораторних робіт
function displayLabContent(labNumber) {
    const content = document.getElementById('mainContent');
    content.innerHTML = `Вміст для лабораторної роботи №${labNumber}. <a href="index.html" class="home-link">(сайт)</a>`;  // Додаємо HTML
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
    if (sectionNumber === 4) {
        // Просто відображаємо текст без зображення для section4
        content.innerHTML = `Вміст для лабораторної роботи №${currentLab}.${sectionNumber} (${sectionTitle})`;
    } else {
        content.innerHTML = `Вміст для лабораторної роботи №${currentLab}.${sectionNumber} (${sectionTitle})`;
    }
}

// Вибір початкової лабораторної роботи
selectLab(1);
