const Vocabulary = require('./Model/vocabulary')
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const { render } = require("ejs");
const { response } = require('express');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    Vocabulary.findAll().then(vocabulary => {
        res.render("index", {vocabulary: vocabulary})
    })
})

app.post('/new', (req, res) => {
    var portugues = req.body.portugues
    var ingles = req.body.ingles
    Vocabulary.findOne({
        where: {
            word: portugues
        }
    }).then(vocabulary => {
        console.log(vocabulary)
        if (vocabulary != null){
            res.redirect('/')
        }else{
            Vocabulary.create({
                word: portugues,
                translate: ingles
            })
            res.redirect('/')
        }   
    })
    
   
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
