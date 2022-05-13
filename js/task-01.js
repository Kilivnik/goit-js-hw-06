const ulEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${ulEl.length}`);

const titleEl = document.querySelectorAll(`#categories>li`);

titleEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}, 
Elements: ${element.lastElementChild.children.length}`)
});