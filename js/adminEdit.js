let editName = document.getElementById('editName'),
    editBigName = document.getElementById('editBigName'),
    editDescription = document.getElementById('editDescription');

function editNameFunc() {
    document.getElementById('cardEditName').innerHTML = editName.value;
    document.getElementById('cardEditNameBG').innerHTML = editName.value;
}

function editBigNameFunc() {
    if (editName.value != null) {
        document.getElementById('cardEditDescription').innerHTML = editBigName.value + ` <span id="cardEditName">${editName.value}</span>`;
        document.getElementById('cardEditDescriptionBG').innerHTML = editBigName.value + ` <span id="cardEditNameBG">${editName.value}</span>`;
    } else {
        document.getElementById('cardEditDescription').innerHTML = editBigName.value + ` <span id="cardEditName"></span>`;
        document.getElementById('cardEditDescriptionBG').innerHTML = editBigName.value + ` <span id="cardEditNameBG"></span>`;
    }
}

function editDescriptionFunc() {
    document.getElementById('cardEditBG').innerHTML = editDescription.value;
}

editName.addEventListener('input', editNameFunc());

editBigName.addEventListener('input', editBigNameFunc());

editDescription.addEventListener('input', editDescriptionFunc());

const xhr = new XMLHttpRequest();

xhr.onload = () => {
    let newOptions = `<option value="" hidden disabled selected>Выбрать</option>`
    if (xhr.status == 200) {  
        let data = JSON.parse(xhr.response);
        for (let i = 0; i < data.cards.length; i++) {
            newOptions += `<option value="${data.cards[i].id}">${data.cards[i].name}</option>`;
        }

        document.getElementById('editSelect').innerHTML = newOptions
        document.getElementById('deleteSelect').innerHTML = newOptions
    }
}

let editSelect = document.getElementById('editSelect'),
    editLink = document.getElementById('editLink')
editSelect.addEventListener('change', () => {
    let data = JSON.parse(xhr.response);
    console.log(editSelect.value)

    for (let i = 0; i < data.cards.length; i++) {
        if (data.cards[i].id === editSelect.value) {
            let object = data.cards[i];
            let cardImg = document.getElementById('commonEdit').querySelector('.card-in img');
            
            editName.value = object.name;
            editBigName.value = object.nameDescription;
            editDescription.value = object.description;
            editLink.value = object.link;

            editNameFunc();
            editBigNameFunc();
            editDescriptionFunc();

            cardImg.src = object.logo;

            break
        }
    }
})

xhr.open('GET', '../json/cards.json', true);
xhr.send(null)

