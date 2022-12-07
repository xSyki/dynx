import path from 'path'
import express from 'express'

const DIST_DIR = path.join(__dirname, 'build')
const PORT = 3000
const app = express()

app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT)

console.log(`App running on: http://localhost:${PORT}/`)
