const inputs = document.querySelectorAll('input')
const btnSubmit = document.querySelector('button[type="submit"]')

btnSubmit.addEventListener('click', () => {
    inputs.forEach(input => {
        if(input.value == "" || (input.type == "email" && input.textContent.match(/[@.com]/g) === null) ) {
            if(input.nextElementSibling.textContent === "Email Address") {
                input.nextElementSibling.textContent = "email@example.com"
            }
            noInput(input)
        } else {
            resetInput(input)
        }
    })
})


inputs.forEach(input => {
    input.addEventListener('input', a)
})

function a() {
    console.log(this.value);
    if(this.value == "") {
        this.parentElement.children[1].classList.remove('toped')
    } else {
        this.parentElement.children[1].classList.add('toped')
    }
    console.log(this.parentElement.children[0]);
}

function noInput(that) {
    that.parentElement.children[2].classList.add('is-open')
    that.classList.add('wrong')
}

function resetInput(that) {
    that.parentElement.children[2].classList.remove('is-open')
    that.classList.remove('wrong')
}