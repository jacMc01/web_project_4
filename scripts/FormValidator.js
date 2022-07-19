
export default class FormValidator {
    constructor(config) {

        this._form = document.forms[config.formName]
        this._type = config.type;

    }

    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault()
        });

        this._setEventListeners();

        // funciones para el form 2 de las tarjetas
        // formList = Array.from(document.querySelectorAll(".form__form"));
        // formList.forEach((form) => {
        //     form.addEventListener("submit", (evt) => {
        //         evt.preventDefault();
        //     });
        //     this._setEventListeners(form, "card");
        // });
    }

     static _checkInputValidity(form, inputElement) {

        const errorElement = form.querySelector(`.${inputElement.id}-error`);

        if (!inputElement.validity.valid) {

            inputElement.classList.add("popup__valid");
            errorElement.textContent = inputElement.validationMessage;
            errorElement.classList.remove("popup__active-error")

        } else {

            inputElement.classList.remove("popup__valid");
            errorElement.classList.add("popup__active-error");
            errorElement.textContent = "";
        }
    }

    static _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    static _toggle(type, inputList, buttonElement) {

        if (type === "profile") {

            if (FormValidator._hasInvalidInput(inputList)) {
                buttonElement.classList.add("popup__button-form_inactive");
                buttonElement.disabled = true;
            } else {
                buttonElement.classList.remove("popup__button-form_inactive");
                buttonElement.disabled = false;
            }

        } else if (type === "card") {


            if (FormValidator._hasInvalidInput(inputList)) {
                buttonElement.classList.add("form__button-form_inactive");
                buttonElement.disabled = true;
            } else {
                buttonElement.classList.remove("form__button-form_inactive");
                buttonElement.disabled = false;
            }
        }
    };

    _setEventListeners() {

        let inputList = []
        let buttonElement = null

        if (this._type === "profile") {

            inputList = Array.from(this._form.querySelectorAll(".popup__input"));
            buttonElement = this._form.querySelector(".popup__button-form");

        } else if (this._type === "card") {
            // funciones para el form 2

            inputList = Array.from(this._form.querySelectorAll(".form__input"));
            buttonElement = this._form.querySelector(".form__button-form");
        }

        const form = this._form
        const type = this._type;

        FormValidator._toggle(type, inputList, buttonElement);

        inputList.forEach(function (inputElement) {

            inputElement.addEventListener("input", function () {

                FormValidator._checkInputValidity(form, inputElement);
                FormValidator._toggle(type, inputList, buttonElement);

            });
        });

    };

}
