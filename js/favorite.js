function ReloadDOM() {
    let cardList = document.getElementById('allCards').querySelectorAll('.card'),
        favList = document.getElementById('favoriteAll').querySelectorAll('.card')

    for (let i = 0; i < cardList.length; i++) {
        let flag = document.getElementById(cardList[i].id).querySelector('.flag')

        switch (localStorage.getItem(cardList[i].id)) {
            case "true":
                flag.classList.remove("false")
                flag.classList.add("true")

                favList[i].classList.remove('none')
                break
            case "false":
                flag.classList.remove("true")
                flag.classList.add("false")

                favList[i].classList.add('none')
                break
        }
    }
}

function FavoritesClick(e) {
    let flag = document.getElementById(e).querySelector('.flag')

    if (localStorage.getItem(e) == 'false') {
        localStorage.setItem(e, true)

        flag.classList.remove('false')
        flag.classList.add('true')
    } else {
        localStorage.setItem(e, false)

        flag.classList.remove('true')
        flag.classList.add('false')
    }

    ReloadDOM()
}

document.addEventListener('DOMContentLoaded', async function() {
    await new Promise((resolve, reject) => setTimeout(resolve, 100))
    ReloadDOM()
});