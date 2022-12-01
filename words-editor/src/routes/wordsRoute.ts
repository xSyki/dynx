import express from 'express'
import fs from 'fs'
import { v4 as uuid } from 'uuid'

import { env } from '../../../environment'
import { IWord } from '../../../src/stores/roundStore'

const router = express.Router()

router.route('/').get((req, res) => {
  const words = JSON.parse(fs.readFileSync(env.words, 'utf8')) as IWord[]

  res.json(words)
})

router.route('/').patch((req, res) => {
  const word = req.body

  const words = JSON.parse(fs.readFileSync(env.words, 'utf8')) as IWord[]

  const wordToEditIndex = words.findIndex((oldWord) => oldWord.id === word.id)

  if (wordToEditIndex === -1) return

  words[wordToEditIndex] = word

  fs.writeFileSync(env.words, JSON.stringify(words, null, 2))
})

router.route('/').post((req, res) => {
  const word = req.body

  const words = JSON.parse(fs.readFileSync(env.words, 'utf8')) as IWord[]

  const wordId = uuid()

  res.json(wordId)

  const newWord: IWord = {
    id: wordId,
    ...word,
  }

  fs.writeFileSync(env.words, JSON.stringify([newWord, ...words], null, 2))
})

router.route('/:wordId').delete((req, res) => {
  const wordId = req.params.wordId

  const words = JSON.parse(fs.readFileSync(env.words, 'utf8')) as IWord[]

  fs.writeFileSync(
    env.words,
    JSON.stringify(
      words.filter((word) => word.id !== wordId),
      null,
      2
    )
  )
})

export default router
