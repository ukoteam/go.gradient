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
    document.getElementById('cardNewDescription').innerHTML = newBigName.value;
    document.getElementById('cardNewDescriptionBG').innerHTML = newBigName.value;
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
let newLogo = document.getElementById('newLogo'),
    newLabelLogo = document.getElementById('newLabelLogo')

// function save (selectedFile)  {
//     let image = document.getElementById('logo');
//     let f = selectedFile.files[0];
//     if (f) {
//         image.style.background = URL.createObjectURL(f);
//         localStorage.setItem('myImage', image.style.background);
//     }
// }



newLogo.addEventListener('change', () => {
    const selectedFile = document.getElementById("newLogo").files[0];
    

    if (selectedFile.type == 'image/png' || selectedFile.type == 'image/jpg' || selectedFile.type == 'image/jpeg') {
        var i = URL.createObjectURL(selectedFile)
        console.log(selectedFile);
        console.log(i);
        // save(selectedFile) 

        let image = document.getElementById('logo');
        image.src = i
    }
})

