const elements = document.querySelector(".elements");

// funcion para agregar las cards.
// se usa para hacer el llenado inicial y agregar con el boton
const addCard = (url, description) => {
    const cardData = {
        name: description,
        link: url
    }

    const card = new Card(cardData, ".elements__element");
    const cardElement = card.generateCard();

    elements.appendChild(cardElement);
}

// agregar listener al boton que lanza el form para agregar cards
const add_card_button = document.querySelector('.profile__btn');
add_card_button.addEventListener("click", openFormImages)

// set de codigo para agregar una card individual.
///////////////////////////////////////////////////////////////
function event_add_card(e) {

    e.preventDefault();

    addCard(e.target.form.elements.form__about.value, e.target.form.elements.form__name.value);

    e.target.form.elements.form__about.value = "";
    e.target.form.elements.form__name.value = "";

    setTimeout(closeFormImages, 175)
}
document.querySelector('.form__button-form').addEventListener("click", event_add_card)
    ///////////////////////////////////////////////////////////////

// set de codigo para editar el perfil
///////////////////////////////////////////////////////////////
function handleProfileFormSubmit(evt) {

    evt.preventDefault();

    const profile__name = document.querySelector('.profile__name');
    const profile__about = document.querySelector('.profile__about');

    profile__name.textContent = evt.target.form.elements.popup__name.value;
    profile__about.textContent = evt.target.form.elements.popup__about.value;

    evt.target.form.elements.popup__name.value = "";
    evt.target.form.elements.popup__about.value = "";

    setTimeout(closeForm, 175)

}
document.querySelector(".popup__button-form").addEventListener("click", handleProfileFormSubmit)
    //////////////////////////////////////////////////////////

// set de codigo de los botones
function openForm() {
    document.querySelector(".popup").style.display = "block";
}
function closeForm() {
    document.querySelector(".popup").style.display = "none";
}
function openFormImages() {
    document.querySelector(".form").style.display = "block";
}
function closeFormImages() {
    document.querySelector(".form").style.display = "none";

}
document.querySelector('.profile__button-person').addEventListener("click", openForm)
document.querySelector('.popup__button-close').addEventListener("click", closeForm)
document.querySelector('.form__button').addEventListener("click", closeFormImages)