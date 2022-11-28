function getNumberRounds(roundLength: number) {
  let numberRounds = 1

  if (roundLength < 10) {
    while (numberRounds * roundLength < 10) {
      numberRounds++
    }

    return numberRounds
  }

  return 1
}

export default getNumberRounds
