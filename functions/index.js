const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const challonge = require('challonge')
const client = challonge.createClient({
  apiKey: 'THQwE1NobDxeWTRbAb8ACEtrUV4jDse7C6N7PwvU'
})

exports.bigben = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1 // London is UTC + 1hr;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`)
})

/*
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('helloWorld!')
})

exports.events = functions.https.onRequest(async (req, res) => {
  await client.tournaments.show({
    id: 'n18011test',
    callback: (err, data) => {
      console.log(err)
      res.send(data)
    }
  })
})

exports.tournamentsCreate = functions.https.onRequest((req, res) => {
  client.tournaments.create({
    tournament: {
      name: 'functionTest',
      url: 'functionTest',
      tournamentType: 'single elimination'
    },
    callback: (err, data) => {
      console.log(err, data)
    }
  })
})
*/
