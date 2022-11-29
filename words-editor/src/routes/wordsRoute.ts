import express from 'express'
import fs from 'fs'

import { env } from '../../../environment'
import { IWord } from '../../../src/stores/roundStore'

const router = express.Router()

router.route('/').get((req, res) => {
  const words = JSON.parse(fs.readFileSync(env.words, 'utf8')) as IWord[]

  console.log(env.words)

  res.json(words)
})

// fs.writeFileSync(
//   copyDir,
//   JSON.stringify(memoSymbols, null, 4)
// )


export default router
