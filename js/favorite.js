let favblank1 = document.getElementById("favblank"),
    favblank2 = document.getElementById("favblank2");

// Нормализация порядка карточек
function noneCheckFunc() {
    for (i = 0; i < 2; i++) {
        if (!favblank1.classList.contains("noneBlank")) {
            favblank1.classList.add("noneBlank");
        } else if (!favblank2.classList.contains("noneBlank")) {
            favblank2.classList.add("noneBlank");
        }
    }
}

function reloadFavBlank() {
    let cardElements = document.getElementById("favoriteAll").querySelectorAll(".card");
    var count = 0
    for (var i = 0; i < cardElements.length; i++) {
        if (!cardElements[i].classList.contains('none') & !cardElements[i].classList.contains('noneBlank')) {
            count++
            console.log(cardElements[i])
        }
    }

    /// Ширина экрана
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewportWidth <= 1200 & viewportWidth > 900) {
        noneCheckFunc()
        switch (count % 3) {
            case 2: favblank1.classList.remove("noneBlank");
        }

    } else if (viewportWidth <= 900) {
        noneCheckFunc()

    } else if (viewportWidth > 1200) {
        noneCheckFunc()
        
        switch (count % 4) {
            case 3: favblank1.classList.remove("noneBlank");
            case 2: {favblank1.classList.remove("noneBlank");
                favblank2.classList.remove("noneBlank")};
        }

        console.log(favblank1)
        console.log(favblank2)
    }
}

function ReloadDOM() {
    var cook = document.cookie;
    if (cook != "") {
        var cookList = cook.split('; ')

        var counter = 0;
        for (var i = 0; i < cookList.length; i++) {
            var cookArgs = cookList[i].split('=');
            let cookieId = document.getElementById(cookArgs[0].slice(3)).querySelector('.flag'),
                favcookieId = document.getElementById(cookArgs[0]).querySelector('.flag'),
                favcardId = document.getElementById(cookArgs[0]);
                
            if (cookArgs[1] == 'true') {
                cookieId.classList.remove("false");
                cookieId.classList.add("true");

                favcookieId.classList.remove("false");
                favcookieId.classList.add("true");

                favcardId.classList.remove("none");
                counter++
            }
        }

        let favContainer = document.getElementById("favoriteAll");
        if (counter == 0) {
            favContainer.classList.add("hide")
        } else {
            favContainer.classList.remove("hide")
        }
    } else {
        let favContainer = document.getElementById("favoriteAll");
        favContainer.classList.add("hide")
    }

    reloadFavBlank()
}

function ReloadMap() {
    let allCards = document.getElementById("allCards").querySelectorAll('.flag');
    for (var i = 0; i < allCards.length; i++) {
        document.cookie = `favcard-${i.toString()}=${allCards[i].classList[1]}; max-age=63000000`;
    }

    ReloadDOM();
}

function FavoritesClick(e) {
    let cardAll = document.getElementById(e).querySelector(".flag");
    let cardFavAll = document.getElementById('fav' + e).querySelector(".flag");

    let favCard = document.getElementById('fav' + e);

    switch (cardAll.classList[1]) {
        case "true":
            cardAll.classList.remove("true");
            cardAll.classList.add("false");

            cardFavAll.classList.remove("true");
            cardFavAll.classList.add("false");

            break;
        case "false":
            cardAll.classList.remove("false");
            cardAll.classList.add("true");

            cardFavAll.classList.remove("false");
            cardFavAll.classList.add("true");
            break;
    }
    favCard.classList.toggle('none');

    ReloadMap();
}

document.addEventListener('DOMContentLoaded', ReloadDOM());

window.addEventListener("resize", reloadFavBlank());

