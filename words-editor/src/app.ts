import express from 'express'

import routes from './routes/index'

const app = express()

const DIST_DIR = `${__dirname}/words-editor-frontend/build`

console.log(DIST_DIR)

app.use(express.static(DIST_DIR))

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/words-editor-frontend/build/index.html`)
})

app.use('/', routes)

const port = 3001

app.listen(port, function () {
  console.log(`Listening on port ${port}...`)
})
