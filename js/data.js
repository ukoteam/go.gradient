var xhr = new XMLHttpRequest();

function ReloadStorage(data) {
    for (let i = 0; i < data.cards.length; i++) {
        if (localStorage.getItem(data.cards[i].id) == null) {
            localStorage.setItem(data.cards[i].id, false)
        }
    }
}

xhr.onload = function() {
    if (xhr.status == 200) {
        responseObject = JSON.parse(xhr.responseText);

        // Загрузка DOM
        var newContent = ``;
        for (var i = 0; i < responseObject.cards.length; i++) {
            newContent += `<div class="card" id="${responseObject.cards[i].id}">`;
            newContent += `<div class="card-in">`;
            newContent += `<div class="card-in__logo" style="background: url(${responseObject.cards[i].logo}) center/cover no-repeat;">`;
            newContent += `<div class="flag false" onclick="FavoritesClick('${responseObject.cards[i].id}')"></div>`;
            newContent += `</div>`;
            newContent += `<h3>${responseObject.cards[i].nameDescription} <span>${responseObject.cards[i].name}</span></h3>`;
            newContent += `</div>`;
            newContent += `<div class="card__info hidden">`;
            newContent += `<h3>${responseObject.cards[i].nameDescription} <span>${responseObject.cards[i].name}</span></h3>`;
            newContent += `<p>${responseObject.cards[i].description}</p>`;
            newContent += `</div>`
            newContent += `<div class="card__buttons">`;
            newContent += `<a href="${responseObject.cards[i].link}" target="_blank">`;
            newContent += `<button class="link-button">Перейти</button>`
            newContent += `</a>`
            newContent += `<button class="info-button" onClick="FunkOut('${responseObject.cards[i].id}')" onmouseover="FunkOn('${responseObject.cards[i].id}', '${responseObject.cards[i].background}')" onmouseout="FunkOut('${responseObject.cards[i].id}')">?</button>`;
            newContent += `</div>`;
            newContent += `</div>`;
        }

        var newFavContent = ``;
        for (var i = 0; i < responseObject.cards.length; i++) {
            newFavContent += `<div class="card none" id="fav${responseObject.cards[i].id}">`;
            newFavContent += `<div class="card-in">`;
            newFavContent += `<div class="card-in__logo" style="background: url(${responseObject.cards[i].logo}) center/cover no-repeat;">`;
            newFavContent += `<div class="flag true" onclick="FavoritesClick('${responseObject.cards[i].id}')"></div>`;
            newFavContent += `</div>`;
            newFavContent += `<h3>${responseObject.cards[i].nameDescription} <span>${responseObject.cards[i].name}</span></h3>`;
            newFavContent += `</div>`;
            newFavContent += `<div class="card__info hidden">`;
            newFavContent += `<h3>${responseObject.cards[i].nameDescription} <span>${responseObject.cards[i].name}</span></h3>`;
            newFavContent += `<p>${responseObject.cards[i].description}</p>`;
            newFavContent += `</div>`
            newFavContent += `<div class="card__buttons">`;
            newFavContent += `<a href="${responseObject.cards[i].link}" target="_blank">`;
            newFavContent += `<button class="link-button">Перейти</button>`
            newFavContent += `</a>`
            newFavContent += `<button class="info-button" onClick="FunkOut('fav${responseObject.cards[i].id}')" onmouseover="FunkOn('fav${responseObject.cards[i].id}', '${responseObject.cards[i].background}')" onmouseout="FunkOut('fav${responseObject.cards[i].id}')">?</button>`;
            newFavContent += `</div>`;
            newFavContent += `</div>`;
        }

        document.getElementById("allCards").innerHTML = newContent;
        document.getElementById("favoriteAll").querySelector('.all-services__all-cards').innerHTML = newFavContent;
    
        // Обновление избранного
        ReloadStorage(responseObject)
    }
}

xhr.open('GET', '/../json/cards.json', true);
xhr.send(null)

