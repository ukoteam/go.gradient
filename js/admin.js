let newButton = document.getElementById('newButton'),
    newForm = document.getElementById('newForm').querySelector('.service-form__form')

newButton.addEventListener('click', () => {
    newForm.classList.toggle('hide');

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
    document.getElementById('cardNewDescription').innerHTML = newBigName.value;
    document.getElementById('cardNewDescriptionBG').innerHTML = newBigName.value;
});

newDescription.addEventListener('input', () => {
    document.getElementById('cardNewBG').innerHTML = newDescription.value;
});