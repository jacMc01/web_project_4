import Card from "./card.js";
import * as index from "./index.js";

export function setUpListeners() {
    document.addEventListener("keydown", pressEscape);
    document.addEventListener("click", closePopup);
}

export function pressEscape(e) {

    if (e.key === "Escape") {
        index.closeForm();
        index.closeFormImages();
        Card.closePopupImage();
    }
}


export function closePopup(e) {

    if (!e.target.closest(".popup") && !(e.target.classList.contains("profile__button-person") || e.target.classList.contains("profile__icon"))) {
        index.closeForm();
    }
    if (!e.target.closest(".form") && !(e.target.classList.contains("profile__btn-image") || e.target.classList.contains("profile__btn"))) {
        index.closeFormImages();
    }
}


