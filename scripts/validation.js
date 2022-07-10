const showError = (form, inputElement, errorMessage) => {
    const errorElement = form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__valid");
    errorElement.textContent = errorMessage;
    errorElement.classList.remove("popup__active-error")
}

const hideInputError = (form, inputElement) => {
    const errorElement = form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove("popup__valid");
    errorElement.classList.add("popup__active-error");
    errorElement.textContent = "";
};

const checkInputValidity = (form, inputElement) => {
    if (!inputElement.validity.valid) {
        showError(form, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(form, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggle = (inputList, buttonElement, type) => {

    if (type === "profile") {

        if (hasInvalidInput(inputList)) {
            buttonElement.classList.add("popup__button-form_inactive");
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove("popup__button-form_inactive");
            buttonElement.disabled = false;
        }

    } else if (type === "card") {
        if (hasInvalidInput(inputList)) {
            buttonElement.classList.add("form__button-form_inactive");
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove("form__button-form_inactive");
            buttonElement.disabled = false;
        }

    }
};

function setEventListeners(form, type = "profile") {

    let inputList = null
    let buttonElement = null

    if (type === "profile") {

        inputList = Array.from(form.querySelectorAll(".popup__input"));
        buttonElement = form.querySelector(".popup__button-form");

    } else if (type === "card") {
        // funciones para el form 2
        inputList = Array.from(form.querySelectorAll(".form__input"));
        buttonElement = form.querySelector(".form__button-form");
    }

    toggle(inputList, buttonElement);

    inputList.forEach(function(inputElement) {
        inputElement.addEventListener("input", function() {
            checkInputValidity(form, inputElement);

            toggle(inputList, buttonElement, type);

        });
    });

};

const enableValidation = () => {
    let formList = Array.from(document.querySelectorAll(".popup__form"));

    formList.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form);
    });


    // funciones para el form 2 de las tarjetas
    formList = Array.from(document.querySelectorAll(".form__form"));
    formList.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, "card");
    });

};

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-form",
    inactiveButtonClass: "popup__button-form_inactive",
    inputErrorClass: "popup__active-error",
    errorClass: "popup__valid"
});