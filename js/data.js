var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status == 200) {
        responseObject = JSON.parse(xhr.responseText);

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
            newContent += `<button class="info-button" onmouseover="FunkOn('${responseObject.cards[i].id}')" onmouseout="FunkOut('${responseObject.cards[i].id}')">?</button>`;
            newContent += `</div>`;
            newContent += `</div>`;
        }

        document.getElementById("allCards").innerHTML = newContent;
    }
}

xhr.open('GET', '/../json/cards.json', true);
xhr.send(null)

