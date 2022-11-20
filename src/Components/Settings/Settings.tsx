import { useState } from 'react'
import { Button, SafeAreaView, Text, TextInput } from 'react-native'
import Checkbox from 'expo-checkbox'

import wordsList from '../../../assets/words/words.json'
import { GameStatusEnum, useGameStore } from '../../stores/gameStore'
import { useRoundStore } from '../../stores/roundStore'
import getRandomWords from '../../utils/getRandomWords'
import getRounds from '../../utils/getRounds'

function Settings() {
  const [{ settings, category, players, gameMode }, { setGameStatus }] =
    useGameStore()
  const [, { setRounds }] = useRoundStore()
  const [numberRounds, setNumberRounds] = useState(settings.rounds)
  const [timer, setTimer] = useState(settings.timer)

  const handleBack = () => {
    setGameStatus(GameStatusEnum.CATEGORY)
  }

  const handleStart = () => {
    if (!category || !gameMode) return

    const words = getRandomWords(
      wordsList.filter((word) => word.categories.includes(category.id)),
      players,
      gameMode,
      numberRounds
    )

    const rounds = getRounds(players, words, gameMode, numberRounds)

    setRounds(rounds)

    setGameStatus(GameStatusEnum.GAME)
  }

  return (
    <SafeAreaView>
      <Button onPress={handleBack} title="Back" />
      <SafeAreaView>
        <Text>Rounds</Text>
        <TextInput
          placeholder="name"
          keyboardType="numeric"
          value={String(numberRounds)}
          onChangeText={(rounds) => setNumberRounds(Number(rounds))}
        />
      </SafeAreaView>
      <SafeAreaView>
        <Text>Timer</Text>
        <Checkbox
          value={timer}
          onValueChange={() => setTimer((timer) => !timer)}
        />
      </SafeAreaView>
      <Button title="Start" onPress={handleStart} />
    </SafeAreaView>
  )
}

export default Settings
