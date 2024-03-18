const fs = require("fs");
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

let raw = fs.readFileSync('../json/cards.json'),
    parseData = JSON.parse(raw);


app.use(express.static(path.resolve(__dirname, '..')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../src/');
    },
    filename: function (req, file, cb) {
        if (req.path == '/addNewCard') {
            cb(null, `logo-${Number(parseData.cards.slice(-1)[0].id.slice(-2)) + 1}.png`);
        } else if (req.path == '/editCard') {
            console.log('ok')
            cb(null, parseData.cards[dataIndex].logo);
            
        }
    }
})

var upload = multer({ storage })
app.post('/addNewCard', upload.single('logo'), function (req, res, next) {
    raw = fs.readFileSync('../json/cards.json');
    parseData = JSON.parse(raw);

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
    
    res.redirect("../admin-page/admin.html")
})

app.post('/editCard', function (req, res, next) {

    console.log(req)

    raw = fs.readFileSync('../json/cards.json');
    parseData = JSON.parse(raw);
    let dataIndex = null;
    
    for (let i = 0; i < parseData.cards.length; i++) {
        if (parseData.cards[i].id == req.body.editSelect) {
            dataIndex = i; 
            break
        }
    }

    console.log(parseData.cards)
    console.log(req.body.editSelect)
    console.log(req.body)
    // req.file.filename = parseData.cards[dataIndex].logo;

    parseData.cards[dataIndex] = {
        id: parseData.cards[dataIndex].id,
        name: req.body.name,
        nameDescription: req.body.bigName,
        logo: parseData.cards[dataIndex].logo, 
        description: req.body.description,
        background: parseData.cards[dataIndex].background,
        link: req.body.link
    }

    parseData = JSON.stringify(parseData);
    fs.writeFileSync('../json/cards.json', parseData)


    res.redirect("../admin-page/admin.html")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
