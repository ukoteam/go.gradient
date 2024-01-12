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
}