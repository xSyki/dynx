import express from 'express'
import fs from 'fs'
import { uuid } from 'uuidv4'

import { env } from '../../../environment'
import { ICategory } from '../../../src/stores/gameStore'

const router = express.Router()

router.route('/').get((req, res) => {
  const categories = JSON.parse(
    fs.readFileSync(env.categories, 'utf8')
  ) as ICategory[]

  res.json(categories)
})

router.route('/').patch((req, res) => {
  console.log(req.body)

  const categories = JSON.parse(
    fs.readFileSync(env.categories, 'utf8')
  ) as ICategory[]

  res.json(categories)
})

router.route('/').post((req, res) => {
  console.log(req)

  const categories = JSON.parse(
    fs.readFileSync(env.categories, 'utf8')
  ) as ICategory[]

  const categoryId = uuid()

  res.json(categoryId)

  // const newCategory: ICategory = {
  //   id: categoryId,
  // }

  // fs.writeFileSync(
  //   copyDir,
  //   JSON.stringify([...categories, newCategory], null, 4),
  //   function (err: any) {
  //     if (err) throw err;
  //     console.log('The "data to append" was appended to file!');
  //   }
  // );
})

export default router
