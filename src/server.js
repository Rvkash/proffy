const { pageLanding, pageStudy, pageGiveClasses } = require('./page')

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')

// Config Nunjucks
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

// Controllers
server.use(express.static('public'))
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)

server.listen(5000, function () {
  console.log('Server ta online')
})
