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

const popupImage = document.querySelector(".popup-image__img");
const popupElement = document.querySelector(".popup-image");
const closeImage = document.querySelector(".popup-image__imagen");

export default class Card {

    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector
    }
    static closePopupImage() {
        popupElement.style.display = "none";
    }

    static setupInitialCards() {
        initialCards.forEach((item)=> {
        const card = new Card(item, ".elements__element");
        const cardElement = card.generateCard();

        document.querySelector(".elements").append(cardElement)
        })
    }

    static setupLikeButton() {
        document.querySelector(".elements").addEventListener("click", (e) => {
            if (e.target.className === "elements__icon") {
                if (e.target.src.includes("black")) {
                    e.target.src = "assets/img/heart.png";
                } else {
                    e.target.src = "assets/img/heart_black.png"
                }
            }
        })
    }

_getTemplate(){
        const cardElement = document.querySelector("template").content
            .querySelector(this._cardSelector).cloneNode(true);
        return cardElement;
    }

    generateCard(){
        // inserts in the DOM the card
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".elements__place").textContent = this._name;
        this._element.querySelector(".elements__photo").src = this._link;
        this._element.querySelector(".elements__photo").alt = this._name;

        return this._element
    }

    _setEventListeners(){
        this._element.querySelector(".elements__photo").addEventListener("click", () => {
            popupImage.src = this._link;
            popupElement.style.display = "block";
        })
        closeImage.addEventListener("click", () => {
            popupElement.style.display = "none";
        })
        this._element.querySelector(".elements__trash").addEventListener("click", () => {
            this._element.remove()
        })

    }
}

Card.setupInitialCards()
Card.setupLikeButton()



