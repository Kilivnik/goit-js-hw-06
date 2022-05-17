const refs = {
    fontSizeInput: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
}
console.log(refs);

const changeFontSize = () => {
    text.style.fontSize = `${refs.fontSizeInput.value}px`;
}

refs.fontSizeInput.addEventListener('input', changeFontSize);
