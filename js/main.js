// Функции для смены наполняемости карточек.
function FunkOn(e) {
    var el = document.getElementById(e)
    var cardIn = el.querySelector('.card-in')
    var cardInfo = el.querySelector('.card__info')

    cardIn.classList.add('hidden')
    cardInfo.classList.remove('hidden')

    if (e.slice(0, 3) == "fav") {
        e = e.slice(3)
    }
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

let blank1 = document.getElementById("blank"),
    blank2 = document.getElementById("blank2"),
    cardElements = document.getElementById("allCards").querySelectorAll(".card");
