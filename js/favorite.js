function ReloadDOM() {
    var cook = document.cookie;
    if (cook != "") {
        var cookList = cook.split('; ')

        var counter = 0;
        for (var i = 0; i < cookList.length; i++) {
            var cookArgs = cookList[i].split('=');
            console.log(cookArgs[0].slice(3))
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

                console.log("OK")
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
    for (var i = 0; i < allCards.length; i++) {
        document.cookie = `favcard-${i.toString()}=${allCards[i].classList[1]}; max-age=63000000`;
    }
    ReloadDOM();
}

function FavoritesClick(e) {
    console.log('Ok')
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

document.addEventListener('onload', async function() {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    console.log("))))")
    ReloadDOM();
    ReloadMap()
});


// document.addEventListener('DOMContentLoaded', ReloadDOM());
// document.addEventListener('DOMContentLoaded', ReloadMap());


document.addEventListener('close', ReloadMap());
