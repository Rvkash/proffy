// Array data
const proffys = [
  {
    name: 'Diego Fernandes',
    avatar: 'https://github.com/diego3g.png',
    whatsapp: '0489448374',
    bio: 'Entusiasta das melhores tecnologias de química avançada ',
    subject: 'Quimica',
    cost: '20',
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  }
]
const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Portugês',
  'Química'
]
const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]
function getSubject (subjectNumber) {
  const position = +subjectNumber - 1
  return subjects[position]
}

function pageLanding (req, res) {
  return res.render('index.html')
}

function pageStudy (req, res) {
  const filters = req.query
  return res.render('study.html', { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req, res) {
  const data = req.query
  // Adicionar data a lista de proffys
  const isNotEmpty = Object.keys(data).lenght == 0
  if (isNotEmpty) {
    data.subject = getSubject(data.subject)
    proffys.push(data)

    return res.redirect('/study')
  }

  return res.render('give-classes.html', { subjects, weekdays })
}

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
