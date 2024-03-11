let editName = document.getElementById('editName'),
    editBigName = document.getElementById('editBigName'),
    editDescription = document.getElementById('editDescription');

editName.addEventListener('input', () => {
    document.getElementById('cardEditName').innerHTML = editName.value;
    document.getElementById('cardEditNameBG').innerHTML = editName.value;
});

editBigName.addEventListener('input', () => {
    if (editName.value != null) {
        document.getElementById('cardEditDescription').innerHTML = editBigName.value + ` <span id="cardEditName">${editName.value}</span>`;
        document.getElementById('cardEditDescriptionBG').innerHTML = editBigName.value + ` <span id="cardEditNameBG">${editName.value}</span>`;
    } else {
        document.getElementById('cardEditDescription').innerHTML = editBigName.value + ` <span id="cardEditName"></span>`;
        document.getElementById('cardEditDescriptionBG').innerHTML = editBigName.value + ` <span id="cardEditNameBG"></span>`;
    }
    
});

editDescription.addEventListener('input', () => {
    document.getElementById('cardEditBG').innerHTML = editDescription.value;
});
