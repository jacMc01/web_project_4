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

const toggle = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("popup__button-form_inactive");
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove("popup__button-form_inactive");
        buttonElement.disabled = false;
    }
};

const setEventListeners = form => {
    const inputList = Array.from(form.querySelectorAll(".popup__input"));
    const buttonElement = form.querySelector(".popup__button-form");

    toggle(inputList, buttonElement);

    inputList.forEach(function(inputElement) {
        inputElement.addEventListener("input", function() {
            checkInputValidity(form, inputElement);

            toggle(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".popup__form"));

    formList.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form);
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

/*######################################################################################*/


const showErrorForm2 = (form, inputElement, errorMessage) => {
    const errorElement = form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__valid");
    errorElement.textContent = errorMessage;
    errorElement.classList.remove("form__active-error")
}

const hideInputErrorForm2 = (form, inputElement) => {
    const errorElement = form.querySelector(`.${inputElement.id}-invalid`);

    inputElement.classList.remove("form__valid");
    errorElement.classList.add("form__active-error");
    errorElement.textContent = "";
};

const checkInputValidityForm2 = (form, inputElement) => {
    if (!inputElement.validity.valid) {
        showErrorForm2(form, inputElement, inputElement.validationMessage);
    } else {
        hideInputErrorForm2(form, inputElement);
    }
};

const hasInvalidInputForm2 = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleForm2 = (inputList, buttonElement) => {
    if (hasInvalidInputForm2(inputList)) {
        buttonElement.classList.add("form__button-form_inactive");
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove("form__button-form_inactive");
        buttonElement.disabled = false;
    }
};

const setEventListenersForm2 = form => {
    const inputList = Array.from(form.querySelectorAll(".form__input"));
    const buttonElement = form.querySelector(".form__button-form");

    toggleForm2(inputList, buttonElement);

    inputList.forEach(function(inputElement) {
        inputElement.addEventListener("input", function() {
            checkInputValidityForm2(form, inputElement);

            toggleForm2(inputList, buttonElement);
        });
    });
};

const enableValidationForm2 = () => {
    const formList = Array.from(document.querySelectorAll(".form__form"));

    formList.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListenersForm2(form);
    });
};

enableValidationForm2({
    formSelector: ".form__form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button-form",
    inactiveButtonClass: "form__button-form_inactive",
    inputErrorClass: "form__active-error",
    errorClass: "form__valid"
});