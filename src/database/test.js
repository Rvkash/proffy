const Database = require('./db')
// const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: 'Diego Fernandes',
    avatar: 'https://github.com/diego3g.png',
    whatsapp: '0489448374',
    bio: 'Entusiasta das melhores tecnologias de química avançada '

  }

  classValue = {
    subject: 'Quimica',
    cost: '20'

  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 2,
      time_from: 500,
      time_to: 1220
    }
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues })

  // consultando dados inseridos
  const selectedProffys = await db.all('SELECT * FROM proffys')
  // console.log(selectedProffys)

  const selectedClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  console.log(selectedClassesAndProffys)

  const selectClassesSchedules = await db.run(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0" 
    And class_schedule.time_from <= "520"
    AND class_schedule.time_to >= "520"
  `)

  console.log(selectClassesSchedules)
})
