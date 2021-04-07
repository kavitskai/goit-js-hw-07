// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
};

function fontSizeChange() {
    refs.text.setAttribute('style', `font-size: ${refs.input.value*2}px`);
}

refs.input.addEventListener('input', fontSizeChange);