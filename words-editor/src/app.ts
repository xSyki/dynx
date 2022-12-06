import cors from 'cors'
import express from 'express'

import routes from './routes/index'

const app = express()

const DIST_DIR = `${__dirname}/words-editor-frontend/build`

app.use(
  cors({
    origin: 'http://localhost:8080',
    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
    credentials: true,
  })
)

app.use(express.json())

app.use(express.static(DIST_DIR))

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/words-editor-frontend/build/index.html`)
})

app.use('/', routes)

const port = 3001

app.listen(port, function () {
  console.log(`Listening on http://localhost:${port}`)
})
