// Функции для смены наполняемости карточек.
function FunkOn(e) {
    var el = document.getElementById(e)
    var cardIn = el.querySelector('.card-in')
    var cardInfo = el.querySelector('.card__info')

    cardIn.classList.add('hidden')
    cardInfo.classList.remove('hidden')

    el.style.background = `url(${"../src/" + e + ".png"}) center/cover no-repeat`;
}

function FunkOut(e) {
    var el = document.getElementById(e)
    var cardIn = el.querySelector('.card-in')
    var cardInfo = el.querySelector('.card__info')

    cardIn.classList.remove('hidden')
    cardInfo.classList.add('hidden')

    el.style.background = "rgba(256, 256, 256)";
}


// Модальное окно
let modal = document.getElementById('modal')
function modalWindow() {
    modal.classList.toggle('hide-modal')
}


// Нормализация порядка карточек
let blank1 = document.getElementById("blank"),
    blank2 = document.getElementById("blank2"),
    cardElements = document.getElementById("allCards").querySelectorAll(".card");

switch ((cardElements.length - 2) % 4) {
    case 3: blank1.classList.remove("none");
    case 2: {blank1.classList.remove("none");
            blank2.classList.remove("none")};
}

function noneCheckFunc() {
    for (i = 0; i < cardElements.length; i++) {
        if (!blank1.classList.contains("none")) {
            blank1.classList.add("none");
        } else if (!blank2.classList.contains("none")) {
            blank2.classList.add("none");
        }
    }
}


window.addEventListener("resize", function(event) {
    /// Ширина экрана
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewportWidth <= 1200 & viewportWidth > 900) {
        noneCheckFunc()

        switch ((cardElements.length - 2) % 3) {
            case 2: blank1.classList.remove("none");
        }
    } else if (viewportWidth <= 900) {
        noneCheckFunc()
    } else if (viewportWidth > 1200) {
        noneCheckFunc()

        switch ((cardElements.length - 2) % 4) {
            case 3: blank1.classList.remove("none");
            case 2: {blank1.classList.remove("none");
                    blank2.classList.remove("none")};
        }
    }
});

// console.log(cardElements)