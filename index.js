const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const savasci =  require("./heroes/savascci.json")
const saman =  require("./heroes/saman.json")
const sura =  require("./heroes/sura.json")
const ninja =  require("./heroes/ninja.json")


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/1', (req,res) => res.send(savasci))
  .get('/2', (req,res) => res.send(saman))
  .get('/3', (req,res) => res.send(sura))
  .get('/4', (req,res) => res.send(ninja))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
