const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const sedatpeker =  require("./heroes/sedatpeker.json")
const sametAraba =  require("./heroes/sametAraba.json")



express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/sedatpeker', (req,res) => res.send(sedatpeker))
  .get('/sametaraba', (req,res) => res.send(sametAraba))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
