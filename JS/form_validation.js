const nameInput = document.querySelector('#userName')
const emailInput = document.querySelector('#userEmail')


function setState(input, isValid, message) {
    const wrapper = input.parentElement;
    const messageElement = wrapper.nextElementSibling

    wrapper.classList.remove("valid", "invalid")

    if (input.value.trim() === "") {
        messageElement.textContent = ""
        return
    }

    if (isValid) {
        wrapper.classList.add('valid')
    } else{
        wrapper.classList.add('invalid');
    }

    messageElement.textContent = message
}


// name validation

nameInput.addEventListener("input", () => {
    const value = nameInput.value.trim()

    if (value.length < 3) {
        setState(nameInput, false, "Name must contain at least 3 characters.")
    } else {
        setState(nameInput, true, "Name is valid")
    }
})


// email validation

emailInput.addEventListener("input", () => {
    const value = emailInput.value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        setState(emailInput, false, "Please enter a valid email address.");
    } else {
        setState(emailInput, true, "Email is valid")
    }
});


