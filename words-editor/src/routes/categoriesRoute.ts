import express from 'express'
import fs from 'fs'
import { v4 as uuid } from 'uuid'

import { env } from '../../../environment'
import { ICategory } from '../../../src/stores/gameStore'
import { IWord } from '../../../src/stores/roundStore'

const router = express.Router()

router.route('/').get((req, res) => {
  const categories = JSON.parse(
    fs.readFileSync(env.categories, 'utf8')
  ) as ICategory[]

  res.json(categories)
})

router.route('/').patch((req, res) => {
  const category = req.body

  const categories = JSON.parse(
    fs.readFileSync(env.categories, 'utf8')
  ) as ICategory[]

  const categoryToEditIndex = categories.findIndex(
    (oldCategory) => oldCategory.id === category.id
  )

  if (categoryToEditIndex === -1) return

  categories[categoryToEditIndex] = category

  fs.writeFileSync(env.categories, JSON.stringify(categories, null, 2))
})

router.route('/').post((req, res) => {
  const category = req.body

  const categories = JSON.parse(
    fs.readFileSync(env.categories, 'utf8')
  ) as ICategory[]

  const categoryId = uuid()

  res.json(categoryId)

  const newCategory: ICategory = {
    id: categoryId,
    ...category,
  }

  fs.writeFileSync(
    env.categories,
    JSON.stringify([...categories, newCategory], null, 2)
  )
})

router.route('/:categoryId').delete((req, res) => {
  const categoryId = req.params.categoryId

  const categories = JSON.parse(
    fs.readFileSync(env.categories, 'utf8')
  ) as ICategory[]

  fs.writeFileSync(
    env.categories,
    JSON.stringify(
      categories.filter((category) => category.id !== categoryId),
      null,
      2
    )
  )

  const words = JSON.parse(fs.readFileSync(env.words, 'utf8')) as IWord[]

  fs.writeFileSync(
    env.words,
    JSON.stringify(
      words.map((word) => {
        return {
          ...word,
          categories: word.categories.filter(
            (category) => category !== categoryId
          ),
        }
      }),
      null,
      2
    )
  )
})

export default router
