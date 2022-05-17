const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: {email , password},
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert(" Заповніть форму")
    } else {
        const formData = {
            email,
            password,
          };
          console.log(formData);   
    }
    console.log(event.currentTarget.elements);
    event.currentTarget.reset();
}); 



