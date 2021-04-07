// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на
// кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
    input: document.querySelector('#controls>input'),
    controls: document.querySelector('#controls'),
    boxes: document.querySelector('#boxes'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
}

const random = Math.round(Math.random()*255);
const randomColor = () => {
    return `rgb(${Math.round(Math.random() * 255)}, 
    ${Math.round(Math.random() * 255)}, 
    ${Math.round(Math.random() * 255)})`
}


const boxSize = 30;
const createBoxes = (amount) => {
    destroyBoxes()
    for (let i=0; i<amount; i++){
        const markup = document.createElement('div');
        const size = boxSize + i*10;
        const color = randomColor();

        markup.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color}`
        refs.boxes.appendChild(markup)
    }
}

const destroyBoxes = ()=> {
    refs.boxes.innerHTML = ''
}

refs.renderBtn.addEventListener('click', () => createBoxes(+refs.input.value))
refs.destroyBtn.addEventListener('click', destroyBoxes)