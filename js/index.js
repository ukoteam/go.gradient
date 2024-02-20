const fs = require("fs");
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");

const newData = {
    id: "test",
    name: "пупупу",
    nameDescription: "пупупу",
    logo: "...", 
    description: "пупупу",
    background: "../src/common.png",
    link: "пупупу"
};

// let raw = fs.readFileSync('../json/cards.json');
// let parseData = JSON.parse(raw);
// let newObject = JSON.stringify(newData);
// newObject = JSON.parse(newObject);
// parseData.cards.push(newObject);
// parseData = JSON.stringify(parseData);
// fs.writeFileSync('../json/cards.json', parseData)

// console.log(parseData)

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '..')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
})

var upload = multer()
app.post('..', upload.array(), function (req, res, next) {
    console.log(req.body)
})

app.get('/admin-page/admin.html', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM form_data ORDER BY id DESC LIMIT 1');
        res.json(data.rows[0]);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.post('/admin-page/admin.html', (req, res) => {
    res.send(`Значение поля формы: ${req.body}`);
    console,log(req.body)
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
