const fs = require("fs");
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");



// console.log(parseData)

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '..')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'src/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now());
//     }
// })

var upload = multer()
app.post('/addNewCard', upload.array(), function (req, res, next) {
    console.log(req.body.name)

    const newData = {
        id: "test",
        name: req.body.name,
        nameDescription: req.body.bigName,
        logo: "...", 
        description: req.body.description,
        background: "../src/common.png",
        link: req.body.link
    };

    let raw = fs.readFileSync('../json/cards.json');
    let parseData = JSON.parse(raw);
    let newObject = JSON.stringify(newData);
    newObject = JSON.parse(newObject);
    parseData.cards.push(newObject);
    parseData = JSON.stringify(parseData);
    fs.writeFileSync('../json/cards.json', parseData)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
