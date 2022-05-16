const incrementBtn = document.querySelector("button[data-action='increment']");
const decrementBtn = document.querySelector("button[data-action='decrement']");

let counterValue = 0;

function clickIncrementBtn () {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}

function clickDecrementBtn () {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}

incrementBtn.addEventListener('click', clickIncrementBtn);
decrementBtn.addEventListener('click', clickDecrementBtn);

