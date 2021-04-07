// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.

const ref = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output')
}

function nameGuest(event) {
    ref.outputName.textContent = event.currentTarget.value;
    if (!ref.outputName.textContent) {
    ref.outputName.textContent = 'незнакомец';
  }
}

ref.inputName.addEventListener('input', nameGuest);