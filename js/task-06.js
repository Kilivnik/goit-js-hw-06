const placeholder = document.querySelector('#validation-input');
console.log(placeholder);

let placeholderLength = placeholder.dataset.length;
console.log(placeholderLength);

placeholder.addEventListener('blur', isValid);

function isValid(value) {
    if(Number(placeholder.value.length) === Number(placeholder.dataset.length)) {
        placeholder.classList.remove('invalid');
        placeholder.classList.add('valid');
    } else {
        placeholder.classList.remove('valid');
        placeholder.classList.add('invalid');
    }
};