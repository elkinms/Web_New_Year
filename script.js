setInterval(printTime, 1000);

// Находим элементы на странице
const root = document.getElementById("root");
const backgroundContainer = document.getElementById("background-container");

const images = [
    './images/01.jpeg',
    './images/02.jpeg',
    './images/03.jpeg',
    './images/04.jpeg'
];

let currentImageIndex = 0;

// Функция для смены фона
function changeBackground() {
    backgroundContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Функция для отображения времени до Нового года
function printTime() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    root.textContent = `Дней: ${days}, Часов: ${hours >= 10 ? hours : '0' + hours}, ` +
        `Минут: ${minutes >= 10 ? minutes : '0' + minutes}, ` + `Минут: ${seconds>= 10 ? seconds : '0' + seconds}`};

// Инициализация
setInterval(changeBackground, 4000); // Смена фона каждые 4 секунды
changeBackground();
printTime();
