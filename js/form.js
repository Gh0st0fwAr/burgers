
const form = document.querySelector("#form");
const send = document.querySelector("#sendButton");
const modal = document.querySelector(".modal");
const modalBtn = document.getElementById("modalBtn");
const modalText = document.querySelector(".modal__text");

form.addEventListener("submit", event => {
    event.preventDefault();

    if (validateForm(form)) {
        const data = new FormData(form);
        data.append("name", form.elements.firstName.value);
        data.append("phone", form.elements.telNumber.value);
        data.append("comment", form.elements.commentBox.value);
        data.append("to", "example@mail.ru");

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(data);
        // xhr.addEventListener("load", () => {
        //     if (xhr.response.status) {
        //         console.log("Файл загружен");
        //         modal.classList.add("modal--active");
        //         modalText.textContent = "Заявка отправлена";
                
        //     } 
        // })

        xhr.onload = loadEvent;
        function loadEvent() {
            if (xhr.response.status) {
                console.log("Файл загружен");
                modal.classList.add("modal--active");
                modalText.textContent = "Заявка отправлена";
                
            } else if (xhr.response.status) {
                console.log("Произошла ошибка");
                modal.classList.add("modal--active");
                modalText.textContent = "Произошла какая-то ошибка";
            } 
        }

    }

})

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.firstName)) {
        valid = false;
    }

    if (!validateField(form.elements.telNumber)) {
        valid = false;
    }

    if (!validateField(form.elements.commentBox)) {
        valid = false;
    }

    return valid;
}

function validateField(field) {
    return field.checkValidity();

}

modalBtn.addEventListener ("click", e=> {
    e.preventDefault();
    modal.classList.remove("modal--active");
})