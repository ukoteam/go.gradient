let newButton = document.getElementById('newButton'),
    newForm = document.getElementById('newForm').querySelector('.new')
    editButton = document.getElementById('editButton'),
    editForm = document.getElementById('newForm').querySelector('.edit')

newButton.addEventListener('click', () => {
    newForm.classList.toggle('shown');

    let minus = newButton.querySelector('.button-plus')
    minus.classList.toggle('minus');

    if (editForm.classList.contains('shown')) {
        editForm.classList.remove('shown');
    }

    let minusOther = editButton.querySelector('.button-plus')
        minusOther.classList.remove('minus');
})

editButton.addEventListener('click', () => {
    editForm.classList.toggle('shown');

    let minus = editButton.querySelector('.button-plus')
    minus.classList.toggle('minus');

    if (newForm.classList.contains('shown')) {
        newForm.classList.remove('shown');

        let minusOther = newButton.querySelector('.button-plus')
        minusOther.classList.remove('minus');
    }
})

let newName = document.getElementById('newName'),
    newBigName = document.getElementById('newBigName');


newName.addEventListener('input', () => {
    document.getElementById('cardNewName').innerHTML = newName.value;
    document.getElementById('cardNewNameBG').innerHTML = newName.value;
});

newBigName.addEventListener('input', () => {
    if (newName.value != null) {
        document.getElementById('cardNewDescription').innerHTML = newBigName.value + ` <span id="cardNewName">${newName.value}</span>`;
        document.getElementById('cardNewDescriptionBG').innerHTML = newBigName.value + ` <span id="cardNewNameBG">${newName.value}</span>`;
    } else {
        document.getElementById('cardNewDescription').innerHTML = newBigName.value + ` <span id="cardNewName"></span>`;
        document.getElementById('cardNewDescriptionBG').innerHTML = newBigName.value + ` <span id="cardNewNameBG"></span>`;
    }
    
});

newDescription.addEventListener('input', () => {
    document.getElementById('cardNewBG').innerHTML = newDescription.value;
});

let form = document.getElementById('form')
form.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
});
