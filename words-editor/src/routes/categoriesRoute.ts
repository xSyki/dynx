import express from 'express'
import fs from 'fs'

import { env } from '../../../environment'
import { ICategory } from '../../../src/stores/gameStore'

const router = express.Router()

router.route('/').get((req, res) => {
  const categories = JSON.parse(
    fs.readFileSync(env.categories, 'utf8')
  ) as ICategory[]

  res.json(categories)
})

export default router
