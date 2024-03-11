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

let raw = fs.readFileSync('../json/cards.json');
let parseData = JSON.parse(raw);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../src/');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Number(parseData.cards.slice(-1)[0].id.slice(-2)) + 1}.png`);
    }
})

var upload = multer({ storage })
app.post('/addNewCard', upload.single('logo'), function (req, res, next) {
    const newData = {
        id: `card-${Number(parseData.cards.slice(-1)[0].id.slice(-2)) + 1}`,
        name: req.body.name,
        nameDescription: req.body.bigName,
        logo: `../src/logo-${Number(parseData.cards.slice(-1)[0].id.slice(-2)) + 1}.png`, 
        description: req.body.description,
        background: "../src/common.png",
        link: req.body.link
    };

    let newObject = JSON.stringify(newData);
    newObject = JSON.parse(newObject);
    parseData.cards.push(newObject);
    parseData = JSON.stringify(parseData);
    fs.writeFileSync('../json/cards.json', parseData)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
