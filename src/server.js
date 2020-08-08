const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require('./page')

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')

// Config Nunjucks
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})
//Receber os dados do req.body
server
.use(express.urlencoded({ extended: true}))



// Configurar arquivos estáticos
server.use(express.static('public'))
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .post('/save-classes', saveClasses)

server.listen(5000, function () {
  console.log('Server ta online')
})