document.addEventListener('DOMContentLoaded', function(e) {
    var cook = document.cookie
    console.log(cook)
})

let allCards = document.querySelectorAll('.flag');
console.log(allCards);

function ReloadMap() {
    var dictFav = new Map();

    let date = new Date(Date.now() + 6.307e7);
    date = date.toUTCString();

    for (var i = 0; i < allCards.length; i++) {
        dictFav.set("favcard-" + i.toString(), allCards[i].classList[1])
        
            document.cookie = `favcard-${i.toString()}=${allCards[i].classList[1]}; max-age=63000000`;
        
        
    }

    console.log(dictFav)
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


