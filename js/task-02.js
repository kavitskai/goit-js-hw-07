// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientList = document.querySelector('#ingredients');
const ingredientItem = ingredients.map(el => {
    const item = document.createElement('li');
    item.textContent = el;
    return item;
});
ingredientList.append(...ingredientItem);