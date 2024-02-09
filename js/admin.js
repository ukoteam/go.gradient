let newButton = document.getElementById('newButton'),
    newForm = document.getElementById('newForm').querySelector('.service-form')

newButton.addEventListener('click', () => {
    newForm.classList.toggle('shown');

    let minus = newButton.querySelector('.button-plus')
    minus.classList.toggle('minus');
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

// Сохранение картинки
newLogo.addEventListener('change', () => {
    const selectedFile = document.getElementById("newLogo").files[0];
    

    if (selectedFile.type == 'image/png' || selectedFile.type == 'image/jpg' || selectedFile.type == 'image/jpeg') {
        var i = URL.createObjectURL(selectedFile);
        let image = document.getElementById('logo');
        image.src = i
    }
})

