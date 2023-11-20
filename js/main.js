function FunkOn(e) {
    var el = document.getElementById(e)
    var cardIn = el.querySelector('.card-in')
    var cardInfo = el.querySelector('.card__info')

    cardIn.classList.add('hidden')
    cardInfo.classList.remove('hidden')
}

function FunkOut(e) {
    var el = document.getElementById(e)
    var cardIn = el.querySelector('.card-in')
    var cardInfo = el.querySelector('.card__info')

    cardIn.classList.remove('hidden')
    cardInfo.classList.add('hidden')
}