
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
}

function ReloadMap() {
    let allCards = document.getElementById("allCards").querySelectorAll('.flag');
    console.log(allCards);

    let date = new Date(Date.now() + 6.307e7);
    date = date.toUTCString();

    for (var i = 0; i < allCards.length; i++) {
        document.cookie = `favcard-${i.toString()}=${allCards[i].classList[1]}; max-age=63000000`;
    }

    ReloadDOM();
}

function FavoritesClick(e) {
    let cardAll = document.getElementById(e).querySelector(".flag");

    switch (cardAll.classList[1]) {
        case "true":
            cardAll.classList.remove("true");
            cardAll.classList.add("false");
            break;
        case "false":
            cardAll.classList.remove("false");
            cardAll.classList.add("true");
            break;
    }

    ReloadMap();
}

document.addEventListener('DOMContentLoaded', function(e) {
    ReloadDOM()
});

