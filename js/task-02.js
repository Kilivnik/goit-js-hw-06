const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector(`#ingredients`);
console.log(listEl);

const element = ingredients.map(ingredient => {
  const item = document.createElement(`li`);
  item.classList.add(`item`);
  item.innerHTML = ingredient;
  listEl.append(item);
});


