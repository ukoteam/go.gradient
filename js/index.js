const fs = require("fs");

// const newData = {
//     id: "test",
//     name: "пупупу",
//     nameDescription: "пупупу",
//     logo: "...", 
//     description: "пупупу",
//     background: "../src/common.png",
//     link: "пупупу"
// };

// let raw = fs.readFileSync('../json/cards.json');
// let parseData = JSON.parse(raw);
// let newObject = JSON.stringify(newData);
// newObject = JSON.parse(newObject);
// parseData.cards.push(newObject);
// parseData = JSON.stringify(parseData);
// fs.writeFileSync('../json/cards.json', parseData)

// console.log(parseData)

document.getElementById("addNewService").addEventListener('click', () => {
    const newData = {
        id: "test",
        name: document.getElementById("newName").value,
        nameDescription: document.getElementById("newBigName").value,
        logo: "...", 
        description: document.getElementById("newDescription").value,
        background: "../src/common.png",
        link: document.getElementById("newLink").value
    };

    console.log('OK')

    let raw = fs.readFileSync('../json/cards.json');
    let parseData = JSON.parse(raw);
    let newObject = JSON.stringify(newData);
    newObject = JSON.parse(newObject);
    parseData.cards.push(newObject);
    parseData = JSON.stringify(parseData);
    fs.writeFileSync('../json/cards.json', parseData)

    console.log(parseData)

    console.log('OK')

})