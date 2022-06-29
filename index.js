const initialCards = [{
        name: "Valle de Yosemite",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];


const elements = document.querySelector(".elements");
const cardsContainer = document.querySelector(".elements__element");

// funcion para agregar las cards.
// se usa para hacer el llenado inicial y agregar con el boton
const addCard = (url, description, alternative) => {

    const cardElement = document.querySelector("template").content.children.elements__element.cloneNode(true);



    cardElement.querySelector(".elements__place").textContent = description;
    cardElement.querySelector(".elements__photo").src = url;
    cardElement.querySelector(".elements__photo").alt = alternative;

    elements.appendChild(cardElement);

}


// funcion para el llenado inicial
function setup_cards() {

    initialCards.forEach(function(item) {
        addCard(item.link, item.name, item.name);
    });

}




// agregar listener al boton que lanza el form para agregar cards
const add_card_button = document.querySelector('.profile__btn');
add_card_button.addEventListener("click", openFormImages)

// set de codigo para agregar una card individual.
///////////////////////////////////////////////////////////////
function event_add_card(e) {

    e.preventDefault();

    addCard(e.target.form.elements.form__about.value, e.target.form.elements.form__name.value, e.target.form.elements.form__name.value);

    e.target.form.elements.form__about.value = "";
    e.target.form.elements.form__name.value = "";

    setTimeout(closeFormImages, 175)
}

document.querySelector('.form__button-form').addEventListener("click", event_add_card)
    ///////////////////////////////////////////////////////////////


// set de codigo para cambiar el nombre y descripcion.
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



// llamada a la funcion de llenado inical
setup_cards();

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


//remover card

document.querySelector(".elements").addEventListener("click", (e) => {
    if (e.target.className === "elements__trash") {
        e.target.parentElement.remove();
        return
    }


    if (e.target.className === "elements__icon") {
        // debugger
        if (e.target.src.includes("black")) {
            // debugger
            e.target.src = "assets/img/heart.png";

        } else {

            e.target.src = "assets/img/heart_black.png"

        }
        return
    }


    if (e.target.className === "elements__photo") {

        popup_image.style.display = "block";
        popup_image.children["popup-image__img"].src = e.target.src;
        return
    }

})


const popup_image = document.querySelector(".popup-image");

function closePopupImage() {
    popup_image.style.display = "none";
}
document.querySelector('.popup-image__button').addEventListener("click", closePopupImage)